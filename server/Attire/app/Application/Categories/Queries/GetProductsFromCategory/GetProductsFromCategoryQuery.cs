using System.Text;
using Application.Common.Models;
using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data.Dapper;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.Category.Errors.Errors;

namespace Application.Categories.Queries.GetProductsFromCategory;

public record FilterParameters(
    string[]? Sizes,
    string[]? Colors,
    string[]? Compositions,
    int? MinPrice,
    int? MaxPrice
);

public record GetProductsFromCategoryQuery(
    Guid CategoryId,
    string? UserId,
    string? Sorting,
    FilterParameters FilterParameters,
    int Page
) : IRequest<Result<GetProductFromCategoryPaginationResultDto, Error>>;

public class GetProductsFromCategoryQueryHandler
    : IRequestHandler<
        GetProductsFromCategoryQuery,
        Result<GetProductFromCategoryPaginationResultDto, Error>
    >
{
    private const int PageLimit = 10;

    private readonly Dictionary<string, string> _sorting =
        new()
        {
            ["new"] = " ORDER BY p.creation_date DESC",
            ["more_expensive"] = " ORDER BY p.price DESC",
            ["cheaper"] = " ORDER BY p.price",
            ["popularity"] = " ORDER BY p.product_id"
        };

    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetProductsFromCategoryQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<GetProductFromCategoryPaginationResultDto, Error>> Handle(
        GetProductsFromCategoryQuery request,
        CancellationToken cancellationToken
    )
    {
        int currentPage = request.Page <= 0 ? 1 : request.Page;

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

        string sqlQuery;

        if (request.UserId == null)
        {
            sqlQuery = GetProductsFromCategoriesWithUnauthorizedUser(
                request.FilterParameters,
                request.Sorting
            );
        }
        else
        {
            sqlQuery = GetProductsFromCategoriesWithAuthorizedUser(
                request.FilterParameters,
                request.Sorting
            );
        }

        Guid? userId = request.UserId == null ? null : Guid.Parse(request.UserId);

        IEnumerable<ProductShortDto> productsFromCategory =
            await connection.QueryAsync<ProductShortDto>(
                sqlQuery,
                new
                {
                    request.CategoryId,
                    UserId = userId,
                    FilterColors = request.FilterParameters.Colors,
                    FilterSizes = request.FilterParameters.Sizes,
                    FilterCompositions = request.FilterParameters.Compositions,
                    request.FilterParameters.MinPrice,
                    request.FilterParameters.MaxPrice,
                    PageLimit,
                    Skip = (currentPage - 1) * PageLimit
                }
            );

        int? nextPageNumber = await GetNextPageNumberOrNull(
            connection,
            request.CategoryId,
            currentPage
        );

        return new GetProductFromCategoryPaginationResultDto(productsFromCategory, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Guid categoryId,
        int page
    )
    {
        int productTotalCount = await connection.QuerySingleAsync<int>(
            "SELECT COUNT(1) FROM products WHERE category_id = @CategoryId",
            new { CategoryId = categoryId }
        );

        int? nextPage = PageLimit * page >= productTotalCount ? null : page + 1;

        return nextPage;
    }

    private string GetProductsFromCategoriesWithUnauthorizedUser(
        FilterParameters filterParameters,
        string? sorting
    )
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT p.product_id as id, 
                   p.creation_date, 
                   p.price, 
                   p.title, 
                   p.title_en,
                   pi.path as image_path, 
                   false AS liked, 
                   false AS is_in_cart,
                   p.is_new
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

        AddGroupByAndGetRangeOrProducts(sqlQuery, sorting);

        return sqlQuery.ToString();
    }

    private string GetProductsFromCategoriesWithAuthorizedUser(
        FilterParameters filterParameters,
        string? sorting
    )
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT p.product_id as id,
                p.creation_date, 
                p.price, 
                p.title, 
                p.title_en,
                pi.path as image_path,
                p.is_new,
                CASE
                    WHEN 
                    (
                    SELECT COUNT(2)
                    FROM user_favorite_product_ids uf
                    WHERE 
                        uf.product_id = p.product_id AND
                        uf.user_id = @UserId
                    LIMIT 1
                    ) > 0 THEN true
                    ELSE false
                END AS liked,
                CASE
                    WHEN 
                    (
                    SELECT COUNT(1)
                    FROM user_cart_items uci 
                    WHERE 
                        uci.product_id = p.product_id AND 
                        uci.user_id = @UserId
                    LIMIT 1
                    ) > 0 THEN true
                ELSE false
                END AS is_in_cart
            FROM products p
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            LEFT JOIN product_colors pc
                ON p.product_id = pc.product_id
            LEFT JOIN product_sizes ps
                ON p.product_id = ps.product_id
            LEFT JOIN user_cart_items uci
                ON p.product_id = uci.product_id
            WHERE pi.order_index = 1 AND
                  p.category_id = @CategoryId"
        );

        AddFilterToSqlQuery(filterParameters, sqlQuery);

        AddGroupByAndGetRangeOrProducts(sqlQuery, sorting);

        return sqlQuery.ToString();
    }

    private void AddGroupByAndGetRangeOrProducts(StringBuilder sqlQuery, string? sortBy)
    {
        sqlQuery.Append(" GROUP BY p.product_id, pi.path, p.price, p.creation_date");

        if (sortBy != null && _sorting.TryGetValue(sortBy, out string? sorting))
        {
            sqlQuery.Append(sorting);
        }

        sqlQuery.Append($" LIMIT @PageLimit OFFSET @Skip");
    }

    private void AddFilterToSqlQuery(FilterParameters filterParameters, StringBuilder sqlQuery)
    {
        if (filterParameters.Colors?.Length > 0)
        {
            sqlQuery.Append(" AND pc.name ILIKE ANY(@FilterColors)");
        }

        if (filterParameters.Sizes?.Length > 0)
        {
            sqlQuery.Append(" AND ps.value ILIKE ANY(@FilterSizes)");
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
