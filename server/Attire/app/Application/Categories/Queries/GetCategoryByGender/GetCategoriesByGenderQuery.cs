using Dapper;
using Domain.Category.ValueObject;
using Domain.DomainErrors;
using Infrastructure.Data.Dapper;
using Infrastructure.Services;
using MediatR;
using Npgsql;
using XResults;

namespace Application.Categories.Queries.GetCategoryByGender;

public record GetCategoriesByGenderQuery(string Gender)
    : IRequest<Result<IEnumerable<CategoryShortDto>, Error>>;

public class GetCategoriesByGenderQueryHandler
    : IRequestHandler<GetCategoriesByGenderQuery, Result<IEnumerable<CategoryShortDto>, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetCategoriesByGenderQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<IEnumerable<CategoryShortDto>, Error>> Handle(
        GetCategoriesByGenderQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery =
            @"
            SELECT category_id as id, name 
            FROM categories
            WHERE gender = @Gender";

        Gender gender = GenderConverter.Convert(request.Gender);

        IEnumerable<CategoryShortDto> categoriesByGender =
            await connection.QueryAsync<CategoryShortDto>(sqlQuery, new { Gender = gender });

        return Result.Ok(categoriesByGender);
    }
}
