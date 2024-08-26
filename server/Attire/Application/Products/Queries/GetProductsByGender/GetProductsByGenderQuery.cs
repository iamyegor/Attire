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

namespace Application.Products.Queries.GetProductsByGender;

public record GetProductsByGenderQuery(string Gender, string? Sorting, int Page, string? UserId)
    : IRequest<Result<GetProductsByGenderPaginationResult, Error>>;

public class GetProductsByGenderQueryHandler
    : IRequestHandler<GetProductsByGenderQuery, Result<GetProductsByGenderPaginationResult, Error>>
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

    public GetProductsByGenderQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<GetProductsByGenderPaginationResult, Error>> Handle(
        GetProductsByGenderQuery request,
        CancellationToken cancellationToken
    )
    {
        int currentPage = request.Page <= 0 ? 1 : request.Page;

        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        string sqlQuery;

        if (request.UserId == null)
        {
            sqlQuery = GetProductsByGenderWithUnauthorizedUser(request.Sorting);
        }
        else
        {
            sqlQuery = GetProductsByGenderWithAuthorizedUser(request.Sorting);
        }

        Guid? userId = request.UserId == null ? null : Guid.Parse(request.UserId);
        Gender gender = GenderConverter.Convert(request.Gender);

        IEnumerable<ProductShortDto> productsByGender =
            await connection.QueryAsync<ProductShortDto>(
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

        return new GetProductsByGenderPaginationResult(productsByGender, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Gender gender,
        int page
    )
    {
        int productsByGenderTotalCount = await connection.QuerySingleAsync<int>(
            @"
            SELECT COUNT(1) 
            FROM products p
            LEFT JOIN categories c
                ON p.category_id = c.category_id
            WHERE gender = @Gender",
            new { Gender = gender }
        );

        int? nextPage = PageLimit * page >= productsByGenderTotalCount ? null : page + 1;

        return nextPage;
    }

    private string GetProductsByGenderWithAuthorizedUser(string? sorting)
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT p.product_id as id,
                p.creation_date, 
                p.price, 
                p.title, 
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
                c.gender = @Gender
            "
        );

        AddSortingProducts(sqlQuery, sorting);

        return sqlQuery.ToString();
    }

    private string GetProductsByGenderWithUnauthorizedUser(string? sorting)
    {
        var sqlQuery = new StringBuilder(
            @"
            SELECT 
                p.product_id as id,
                p.creation_date, 
                p.price, 
                p.title, 
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
                c.gender = @Gender
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
