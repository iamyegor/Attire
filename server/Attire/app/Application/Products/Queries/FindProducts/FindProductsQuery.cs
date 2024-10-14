using Application.Common.Models;
using Dapper;
using Infrastructure.Data.Dapper;
using MediatR;
using Npgsql;

namespace Application.Products.Queries.FindProducts;

public record FindProductsQuery(string SearchText, int Page, string? UserId)
    : IRequest<FindProductsPaginationResult>;

public class FindProductsQueryHandler
    : IRequestHandler<FindProductsQuery, FindProductsPaginationResult>
{
    private const int PageLimit = 10;
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public FindProductsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<FindProductsPaginationResult> Handle(
        FindProductsQuery request,
        CancellationToken cancellationToken
    )
    {
        int currentPage = request.Page <= 0 ? 1 : request.Page;

        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery;

        if (request.UserId == null)
        {
            sqlQuery = FindProductsWithUnauthorizedUser();
        }
        else
        {
            sqlQuery = FindProductsWithAuthorizedUser();
        }

        Guid? userId = request.UserId == null ? null : Guid.Parse(request.UserId);

        IEnumerable<ProductShortDto> filteredProducts =
            await connection.QueryAsync<ProductShortDto>(
                sqlQuery,
                new
                {
                    SearchText = "%" + request.SearchText + "%",
                    UserId = userId,
                    PageLimit,
                    Skip = (currentPage - 1) * PageLimit
                }
            );

        int? nextPageNumber = await GetNextPageNumberOrNull(
            connection,
            request.SearchText,
            currentPage
        );

        return new FindProductsPaginationResult(filteredProducts, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        string searchText,
        int page
    )
    {
        int productTotalCount = await connection.QuerySingleAsync<int>(
            "SELECT COUNT(1) FROM products WHERE title ILIKE @SearchText OR title_en ILIKE @SearchText",
            new { SearchText = "%" + searchText + "%" }
        );

        int? nextPage = PageLimit * page >= productTotalCount ? null : page + 1;

        return nextPage;
    }

    private string FindProductsWithUnauthorizedUser()
    {
        string sqlQuery =
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
            INNER JOIN product_images pi
                ON p.product_id = pi.product_id
            WHERE 
                pi.order_index = 1 AND
                (p.title ILIKE @SearchText OR
                p.title_en ILIKE @SearchText)
            LIMIT @PageLimit
            OFFSET @Skip
            ";

        return sqlQuery;
    }

    private string FindProductsWithAuthorizedUser()
    {
        var sqlQuery =
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
            WHERE 
                pi.order_index = 1 AND
                (p.title ILIKE @SearchText OR
                p.title_en ILIKE @SearchText)
            LIMIT @PageLimit
            OFFSET @Skip";

        return sqlQuery;
    }
}
