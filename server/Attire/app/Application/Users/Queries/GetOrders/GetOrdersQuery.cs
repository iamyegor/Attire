using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using Infrastructure.Data.Dapper;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Queries.GetOrders;

public record GetOrdersQuery(Guid UserId, int Page)
    : IRequest<Result<GetOrdersPaginationResult, Error>>;

public class GetOrdersQueryHandler
    : IRequestHandler<GetOrdersQuery, Result<GetOrdersPaginationResult, Error>>
{
    private const int PageLimit = 10;
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetOrdersQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<GetOrdersPaginationResult, Error>> Handle(
        GetOrdersQuery request,
        CancellationToken cancellationToken
    )
    {
        int currentPage = request.Page <= 0 ? 1 : request.Page;

        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        if (
            await connection.QuerySingleOrDefaultAsync(
                "SELECT 1 FROM users WHERE user_id = @UserId LIMIT 1",
                new { request.UserId }
            ) == null
        )
        {
            return Errors.User.WithIdNotFound(request.UserId);
        }

        string sqlQuery =
            @"
            SELECT 
                order_id as id,
                delivery_date as creation_date,
                cost,
                delivery_date
            FROM user_orders
            WHERE user_id = @UserId
            LIMIT @PageLimit
            OFFSET @Skip";

        IEnumerable<OrderDto> orders = await connection.QueryAsync<OrderDto>(
            sqlQuery,
            new
            {
                request.UserId,
                PageLimit,
                Skip = (currentPage - 1) * PageLimit
            }
        );

        int? nextPageNumber = await GetNextPageNumberOrNull(
            connection,
            request.UserId,
            currentPage
        );

        return new GetOrdersPaginationResult(orders, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Guid userId,
        int page
    )
    {
        int productTotalCount = await connection.QuerySingleAsync<int>(
            "SELECT COUNT(1) FROM user_orders WHERE user_id = @UserId",
            new { UserId = userId }
        );

        int? nextPage = PageLimit * page >= productTotalCount ? null : page + 1;

        return nextPage;
    }
}
