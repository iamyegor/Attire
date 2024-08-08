using System.Text;
using Application.Common.Models;
using Dapper;
using Infrastructure.Data;
using MediatR;
using Npgsql;

namespace Application.Categories.Queries.GetProductsFromCategory;

public record FilterParameters(
    string[]? Sizes,
    string[]? Colors,
    string[]? Compositions,
    int? MinPrice,
    int? MaxPrice
);

public record SortParameters(string? SortBy, string? SortByDescending);

public record GetProductsFromCategoryQuery(
    Guid CategoryId,
    string? UserId,
    SortParameters SortParameters,
    FilterParameters FilterParameters
) : IRequest<IEnumerable<ProductShortDto>>;

public class GetProductsFromCategoryQueryHandler
    : IRequestHandler<GetProductsFromCategoryQuery, IEnumerable<ProductShortDto>>
{
    private readonly Dictionary<string, Func<ProductShortDto, dynamic>> _sortBy =
        new() { ["popularity"] = product => product.Id, ["price"] = product => product.Price };

    private readonly Dictionary<string, Func<ProductShortDto, object>> _sortByDescending =
        new()
        {
            ["creationDate"] = product => product.CreationDate,
            ["price"] = product => product.Price
        };

    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetProductsFromCategoryQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<IEnumerable<ProductShortDto>> Handle(
        GetProductsFromCategoryQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery;

        if (request.UserId == null)
        {
            sqlQuery = GetProductsFromCategoriesWithUnauthorizedUser(request.FilterParameters);
        }
        else
        {
            sqlQuery = GetProductsFromCategoriesWithAuthorizedUser(request.FilterParameters);
        }

        IEnumerable<ProductShortDto> productsFromCategory =
            await connection.QueryAsync<ProductShortDto>(
                sqlQuery,
                new
                {
                    request.CategoryId,
                    request.UserId,
                    FilterColors = request.FilterParameters.Colors,
                    FilterSizes = request.FilterParameters.Sizes,
                    FilterCompositions = request.FilterParameters.Compositions,
                    request.FilterParameters.MinPrice,
                    request.FilterParameters.MaxPrice
                }
            );

        if (
            request.SortParameters.SortBy != null
            && _sortBy.TryGetValue(request.SortParameters.SortBy, out var sortBy)
        )
        {
            productsFromCategory = productsFromCategory.OrderBy(sortBy);
        }

        if (
            request.SortParameters.SortByDescending != null
            && _sortByDescending.TryGetValue(
                request.SortParameters.SortByDescending,
                out var sortByDescending
            )
        )
        {
            productsFromCategory = productsFromCategory.OrderByDescending(sortByDescending);
        }

        return productsFromCategory;
    }

    private string GetProductsFromCategoriesWithUnauthorizedUser(FilterParameters filterParameters)
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT p.product_id as id, 
            p.creation_date, p.price, p.title, pi.path as image_path, false AS liked
            FROM products p
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            LEFT JOIN product_colors pc
                ON p.product_id = pc.product_id
            LEFT JOIN product_sizes ps
                ON p.product_id = ps.product_id
            WHERE pi.order_index = 1 AND
                  p.category_id = @CategoryId"
        );

        AddFilterToSqlQuery(filterParameters, sqlQuery);

        sqlQuery.Append(" GROUP BY p.product_id, pi.path");

        return sqlQuery.ToString();
    }

    private string GetProductsFromCategoriesWithAuthorizedUser(FilterParameters filterParameters)
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT p.product_id as id, p.creation_date, p.price, p.title, pi.path as image_path, 
                CASE
                    WHEN uf.user_id IS NOT NULL THEN true
                    ELSE false
                END AS liked
            FROM products p
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            LEFT JOIN product_colors pc
                ON p.product_id = pc.product_id
            LEFT JOIN product_sizes ps
                ON p.product_id = ps.product_id
            LEFT JOIN user_favorite_product_ids uf
                ON p.product_id = uf.product_id
            WHERE pi.order_index = 1 AND
                  p.category_id = @CategoryId AND
                  uf.user_id = @UserId"
        );

        AddFilterToSqlQuery(filterParameters, sqlQuery);

        sqlQuery.Append(" GROUP BY p.product_id, pi.path");

        return sqlQuery.ToString();
    }

    private void AddFilterToSqlQuery(FilterParameters filterParameters, StringBuilder sqlQuery)
    {
        if (filterParameters.Colors?.Length > 0)
        {
            sqlQuery.Append(" AND pc.name ILIKE ANY(@FilterColors)");
        }

        if (filterParameters.Sizes?.Length > 0)
        {
            sqlQuery.Append(" AND ps.value = ANY(@FilterSizes)");
        }

        if (filterParameters.Compositions?.Length > 0)
        {
            sqlQuery.Append(" AND p.composition ILIKE ANY(@FilterCompositions)");
        }

        if (filterParameters.MinPrice != null)
        {
            sqlQuery.Append(" AND p.price >= @MinPrice");
        }

        if (filterParameters.MaxPrice != null)
        {
            sqlQuery.Append(" AND p.price <= @MaxPrice");
        }
    }
}
