using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.Category.Errors.Errors;

namespace Application.Categories.Queries.GetProductFilterFromCategory;

public record GetProductFilterFromCategoryQuery(Guid CategoryId)
    : IRequest<Result<ProductFilterDto, Error>>;

public class GetProductFilterFromCategoryQueryHandler
    : IRequestHandler<GetProductFilterFromCategoryQuery, Result<ProductFilterDto, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetProductFilterFromCategoryQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<ProductFilterDto, Error>> Handle(
        GetProductFilterFromCategoryQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        if (
            await connection.QuerySingleOrDefaultAsync(
                "SELECT 1 FROM categories WHERE category_id = @CategoryId",
                new { request.CategoryId }
            ) == null
        )
        {
            return Errors.Category.WithIdNotFound(request.CategoryId);
        }

        string sqlQuery =
            @"
            SELECT DISTINCT LOWER(ps.value)
            FROM product_sizes ps
            LEFT JOIN products p
                ON ps.product_id = p.product_id
            WHERE p.category_id = @CategoryId;

            SELECT LOWER(pc.name) as name, pc.hex
            FROM product_colors pc
            LEFT JOIN products p
                ON pc.product_id = p.product_id
            WHERE p.category_id = @CategoryId
            GROUP BY LOWER(pc.name), pc.hex;

            SELECT DISTINCT LOWER(composition)
            FROM products
            WHERE category_id = @CategoryId;

            SELECT MIN(price) as min_price FROM products;

            SELECT MAX(price) as max_price FROM products;
            ";

        SqlMapper.GridReader reader = await connection.QueryMultipleAsync(
            sqlQuery,
            new { request.CategoryId }
        );

        string[] filteredSizes = (await reader.ReadAsync<string>()).ToArray();

        ColorDto[] filteredColors = (await reader.ReadAsync<ColorDto>()).ToArray();

        string[] filteredCompositions = (await reader.ReadAsync<string>()).ToArray();

        int? filteredMinPrice = await reader.ReadFirstOrDefaultAsync<int>();

        int? filteredMaxPrice = await reader.ReadFirstOrDefaultAsync<int>();

        return new ProductFilterDto(
            filteredSizes,
            filteredColors,
            filteredCompositions,
            filteredMinPrice,
            filteredMaxPrice
        );
    }
}
