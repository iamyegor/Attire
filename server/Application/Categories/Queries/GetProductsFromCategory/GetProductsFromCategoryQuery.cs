﻿using System.Text;
using Application.Common.Models;
using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
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

public record SortParameters(string? SortBy, string? SortByDescending);

public record GetProductsFromCategoryQuery(
    Guid CategoryId,
    string? UserId,
    SortParameters SortParameters,
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

    public async Task<Result<GetProductFromCategoryPaginationResultDto, Error>> Handle(
        GetProductsFromCategoryQuery request,
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

        string sqlQuery;

        if (request.UserId == null)
        {
            sqlQuery = GetProductsFromCategoriesWithUnauthorizedUser(
                request.FilterParameters,
                request.Page
            );
        }
        else
        {
            sqlQuery = GetProductsFromCategoriesWithAuthorizedUser(
                request.FilterParameters,
                request.Page
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

        int? nextPageNumber = await GetNextPageNumberOrNull(
            connection,
            request.CategoryId,
            request.Page
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
        int page
    )
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

        AddGroupByAndGetRangeOrProducts(sqlQuery, page);

        return sqlQuery.ToString();
    }

    private string GetProductsFromCategoriesWithAuthorizedUser(
        FilterParameters filterParameters,
        int page
    )
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

        AddGroupByAndGetRangeOrProducts(sqlQuery, page);

        return sqlQuery.ToString();
    }

    private void AddGroupByAndGetRangeOrProducts(StringBuilder sqlQuery, int page)
    {
        sqlQuery.Append(" GROUP BY p.product_id, pi.path");
        sqlQuery.Append($" LIMIT {PageLimit} OFFSET {(page - 1) * PageLimit}");
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
