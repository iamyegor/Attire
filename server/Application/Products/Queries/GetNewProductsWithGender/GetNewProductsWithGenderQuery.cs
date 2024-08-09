using Application.Common.Models;
using Dapper;
using Domain.Category.ValueObject;
using Domain.DomainErrors;
using Infrastructure.Data;
using Infrastructure.Services;
using MediatR;
using Npgsql;
using XResults;

namespace Application.Products.Queries.GetNewProductsWithGender;

public record SortParameters(string? SortBy, string? SortByDescending);

public record GetNewProductsWithGenderQuery(
    string Gender,
    SortParameters SortParameters,
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
    private readonly Dictionary<string, Func<ProductShortDto, dynamic>> _sortBy =
        new() { ["popularity"] = product => product.Id, ["price"] = product => product.Price };

    private readonly Dictionary<string, Func<ProductShortDto, object>> _sortByDescending =
        new()
        {
            ["creationDate"] = product => product.CreationDate,
            ["price"] = product => product.Price
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
            sqlQuery = GetNewProductsWithGenderWithUnauthorizedUser();
        }
        else
        {
            sqlQuery = GetNewProductsWithGenderWithAuthorizedUser();
        }

        Guid? userId = request.UserId == null ? null : Guid.Parse(request.UserId);
        Gender gender = GenderConverter.Convert(request.Gender);

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

        if (
            request.SortParameters.SortBy != null
            && _sortBy.TryGetValue(request.SortParameters.SortBy, out var sortBy)
        )
        {
            newProducts = newProducts.OrderBy(sortBy);
        }

        if (
            request.SortParameters.SortByDescending != null
            && _sortByDescending.TryGetValue(
                request.SortParameters.SortByDescending,
                out var sortByDescending
            )
        )
        {
            newProducts = newProducts.OrderByDescending(sortByDescending);
        }

        int? nextPageNumber = await GetNextPageNumberOrNull(connection, gender, currentPage);

        return new GetNewProductsWithGenderPaginationResult(newProducts, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Gender gender,
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
                gender = @Gender",
            new { Gender = gender }
        );

        int? nextPage = PageLimit * page >= newProductTotalCount ? null : page + 1;

        return nextPage;
    }

    public string GetNewProductsWithGenderWithUnauthorizedUser()
    {
        string sqlQuery =
            @"
            SELECT 
                p.product_id as id,
                p.creation_date, 
                p.price, 
                p.title, 
                pi.path as image_path, 
                false AS liked,
                false AS is_in_cart
            FROM products p
            LEFT JOIN categories c
                ON p.category_id = c.category_id
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            WHERE 
                pi.order_index = 1 AND
                p.is_new = true AND
                c.gender = @Gender
            LIMIT @PageLimit
            OFFSET @Skip";

        return sqlQuery;
    }

    public string GetNewProductsWithGenderWithAuthorizedUser()
    {
        string sqlQuery =
            @"
            SELECT p.product_id as id,
                p.creation_date, p.price, p.title, pi.path as image_path,
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
                c.gender = @Gender
            LIMIT @PageLimit
            OFFSET @Skip";

        return sqlQuery;
    }
}
