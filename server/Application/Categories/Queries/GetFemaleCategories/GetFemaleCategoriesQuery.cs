using Application.Categories.Queries.Common;
using Dapper;
using Domain.Category.ValueObject;
using Infrastructure.Data;
using MediatR;
using Npgsql;

namespace Application.Categories.Queries.GetFemaleCategories;

public record GetFemaleCategoriesQuery() : IRequest<IEnumerable<CategoryShortDto>>;

public class GetFemaleCategoriesQueryHandler
    : IRequestHandler<GetFemaleCategoriesQuery, IEnumerable<CategoryShortDto>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetFemaleCategoriesQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<IEnumerable<CategoryShortDto>> Handle(
        GetFemaleCategoriesQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery =
            @"
            SELECT category_id as id, name 
            FROM categories
            WHERE gender = @FemaleGender";

        IEnumerable<CategoryShortDto> femaleCategories =
            await connection.QueryAsync<CategoryShortDto>(
                sqlQuery,
                new { FemaleGender = Gender.Female }
            );

        return femaleCategories;
    }
}
