using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Queries.GetUserAddress;

public record GetUserAddressQuery(Guid UserId) : IRequest<Result<AddressDto, Error>>;

public class GetUserAddressQueryHandler
    : IRequestHandler<GetUserAddressQuery, Result<AddressDto, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetUserAddressQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<AddressDto, Error>> Handle(
        GetUserAddressQuery request,
        CancellationToken cancellationToken
    )
    {
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
                city,
                post_index,
                street,
                house
            FROM users
            WHERE user_id = @UserId
            LIMIT 1";

        AddressDto? userAddress = await connection.QuerySingleOrDefaultAsync<AddressDto>(
            sqlQuery,
            new { request.UserId }
        );

        if (userAddress == null)
        {
            return Errors.User.WithIdNotFound(request.UserId);
        }

        return userAddress;
    }
}
