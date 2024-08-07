using Application.Categories.Queries.Common;
using Dapper;
using Domain.Category.ValueObject;
using Infrastructure.Data;
using MediatR;
using Npgsql;

namespace Application.Categories.Queries.GetMaleCategories;

public record GetMaleCategoriesQuery() : IRequest<IEnumerable<CategoryShortDto>>;

public class GetMaleCategoriesQueryHandler
    : IRequestHandler<GetMaleCategoriesQuery, IEnumerable<CategoryShortDto>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetMaleCategoriesQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<IEnumerable<CategoryShortDto>> Handle(
        GetMaleCategoriesQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery =
            @"
            SELECT category_id as id, name 
            FROM categories
            WHERE gender = @MaleGender";

        IEnumerable<CategoryShortDto> maleCategories =
            await connection.QueryAsync<CategoryShortDto>(
                sqlQuery,
                new { MaleGender = Gender.Male }
            );

        return maleCategories;
    }
}
