using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using Infrastructure.Data.Dapper;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Queries.GetFavoriteProducts;

public record GetFavoriteProductsQuery(Guid UserId, int Page)
    : IRequest<Result<GetFavoriteProductsPaginationResult, Error>>;

public class GetFavoriteProductsQueryHandler
    : IRequestHandler<GetFavoriteProductsQuery, Result<GetFavoriteProductsPaginationResult, Error>>
{
    private const int PageLimit = 10;

    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetFavoriteProductsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<GetFavoriteProductsPaginationResult, Error>> Handle(
        GetFavoriteProductsQuery request,
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
                p.product_id,
                i.path as image_path,
                p.price,
                p.title,
                p.is_new,
                true as liked,
                CASE
                    WHEN 
                        (
                        SELECT COUNT(1) 
                        FROM user_cart_items uci
                        WHERE
                            uci.user_id = @UserId AND
                            uci.product_id = p.product_id
                        LIMIT 1
                        ) > 0 THEN true
                    ELSE false
                END AS is_in_cart
            FROM user_favorite_product_ids uf
            LEFT JOIN products p
                ON uf.product_id = p.product_id
            LEFT JOIN product_images i
                ON i.product_id = p.product_id
            WHERE 
                i.order_index = 1 AND
                uf.user_id = @UserId
            LIMIT @PageLimit
            OFFSET @Skip";

        IEnumerable<FavoriteProductDto> favoriteProducts =
            await connection.QueryAsync<FavoriteProductDto>(
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

        return new GetFavoriteProductsPaginationResult(favoriteProducts, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Guid userId,
        int page
    )
    {
        int favoriteProductsTotalCount = await connection.QuerySingleAsync<int>(
            @"
            SELECT COUNT(1) 
            FROM user_favorite_product_ids 
            WHERE user_id = @UserId",
            new { UserId = userId }
        );

        int? nextPage = PageLimit * page >= favoriteProductsTotalCount ? null : page + 1;

        return nextPage;
    }
}
