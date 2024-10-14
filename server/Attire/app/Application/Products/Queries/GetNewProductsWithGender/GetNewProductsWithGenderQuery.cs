using System.Text;
using Application.Common.Models;
using Dapper;
using Domain.Category.ValueObject;
using Domain.DomainErrors;
using Infrastructure.Data.Dapper;
using Infrastructure.Services;
using MediatR;
using Npgsql;
using XResults;

namespace Application.Products.Queries.GetNewProductsWithGender;

public record GetNewProductsWithGenderQuery(
    string? Gender,
    string? Sorting,
    int Page,
    string? UserId
) : IRequest<Result<GetNewProductsWithGenderPaginationResult, Error>>;

public class GetNewProductsWithGenderQueryHandler
    : IRequestHandler<
        GetNewProductsWithGenderQuery,
        Result<GetNewProductsWithGenderPaginationResult, Error>
    >
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    private const int PageLimit = 10;

    private readonly Dictionary<string, string> _sorting =
        new()
        {
            ["new"] = " ORDER BY p.creation_date DESC",
            ["more_expensive"] = " ORDER BY p.price DESC",
            ["cheaper"] = " ORDER BY p.price",
            ["popularity"] = " ORDER BY p.product_id"
        };

    public GetNewProductsWithGenderQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<GetNewProductsWithGenderPaginationResult, Error>> Handle(
        GetNewProductsWithGenderQuery request,
        CancellationToken cancellationToken
    )
    {
        int currentPage = request.Page <= 0 ? 1 : request.Page;

        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery;

        if (request.UserId == null)
        {
            sqlQuery = GetNewProductsWithGenderWithUnauthorizedUser(request.Sorting);
        }
        else
        {
            sqlQuery = GetNewProductsWithGenderWithAuthorizedUser(request.Sorting);
        }

        Guid? userId = request.UserId == null ? null : Guid.Parse(request.UserId);
        Gender? gender =
            request.Gender == null ? null : GenderConverter.Convert(request.Gender).Value;

        IEnumerable<ProductShortDto> newProducts = await connection.QueryAsync<ProductShortDto>(
            sqlQuery,
            new
            {
                UserId = userId,
                PageLimit,
                Skip = (currentPage - 1) * PageLimit,
                Gender = gender
            }
        );

        int? nextPageNumber = await GetNextPageNumberOrNull(connection, gender, currentPage);

        return new GetNewProductsWithGenderPaginationResult(newProducts, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Gender? gender,
        int page
    )
    {
        int newProductTotalCount = await connection.QuerySingleAsync<int>(
            @"
            SELECT COUNT(1) 
            FROM products p
            LEFT JOIN categories c
                ON p.category_id = c.category_id
            WHERE 
                is_new = true AND
                (gender = @Gender OR @Gender IS NULL)",
            new { Gender = gender }
        );

        int? nextPage = PageLimit * page >= newProductTotalCount ? null : page + 1;

        return nextPage;
    }

    private string GetNewProductsWithGenderWithUnauthorizedUser(string? sorting)
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT 
                p.product_id as id,
                p.creation_date, 
                p.price, 
                p.title, 
                p.title_en,
                pi.path as image_path, 
                false AS liked,
                false AS is_in_cart,
                p.is_new
            FROM products p
            LEFT JOIN categories c
                ON p.category_id = c.category_id
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            WHERE 
                pi.order_index = 1 AND
                p.is_new = true AND
                (gender = @Gender OR @Gender IS NULL)
            "
        );

        AddSortingProducts(sqlQuery, sorting);

        return sqlQuery.ToString();
    }

    private string GetNewProductsWithGenderWithAuthorizedUser(string? sorting)
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
            LEFT JOIN categories c
                ON p.category_id = c.category_id
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            WHERE 
                pi.order_index = 1 AND
                p.is_new = true AND
                (gender = @Gender OR @Gender IS NULL)
            "
        );

        AddSortingProducts(sqlQuery, sorting);

        return sqlQuery.ToString();
    }

    private void AddSortingProducts(StringBuilder sqlQuery, string? sortBy)
    {
        if (sortBy != null && _sorting.TryGetValue(sortBy, out string? sorting))
        {
            sqlQuery.Append(sorting);
        }

        sqlQuery.Append(" LIMIT @PageLimit OFFSET @Skip");
    }
}
