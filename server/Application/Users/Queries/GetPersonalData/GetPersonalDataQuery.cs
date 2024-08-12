using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Queries.GetPersonalData;

public record GetPersonalDataQuery(Guid UserId) : IRequest<Result<PersonalDataDto, Error>>;

public class GetPersonalDataQueryHandler
    : IRequestHandler<GetPersonalDataQuery, Result<PersonalDataDto, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetPersonalDataQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<PersonalDataDto, Error>> Handle(
        GetPersonalDataQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery =
            @"
            SELECT 
                first_name, 
                last_name, 
                phone,
                email
            FROM users
            WHERE user_id = @UserId
            LIMIT 1";

        PersonalDataDto? userPersonalData =
            await connection.QuerySingleOrDefaultAsync<PersonalDataDto>(
                sqlQuery,
                new { request.UserId }
            );

        if (userPersonalData == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        return userPersonalData;
    }
}
