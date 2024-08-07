using Application.Common.Models;
using Dapper;
using Infrastructure.Data;
using MediatR;
using Npgsql;

namespace Application.Categories.Queries.GetProductsFromCategory;

public record GetProductsFromCategoryQuery(Guid CategoryId, string? UserId)
    : IRequest<IEnumerable<ProductShortDto>>;

public class GetProductsFromCategoryQueryHandler
    : IRequestHandler<GetProductsFromCategoryQuery, IEnumerable<ProductShortDto>>
{
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

        if (request.UserId == null)
        {
            string sqlQuery =
                @"
                SELECT p.price, p.title, pi.path as image_path, false AS liked
                FROM products p
                INNER JOIN product_images pi
                    ON p.product_id = pi.product_id
                WHERE pi.order_index = 1 AND
                      p.category_id = @CategoryId";

            IEnumerable<ProductShortDto> productsFromCategory =
                await connection.QueryAsync<ProductShortDto>(sqlQuery, new { request.CategoryId });

            return productsFromCategory;
        }
        else
        {
            string sqlQuery =
                @"
                SELECT p.price, p.title, pi.path as image_path,
                    CASE
                        WHEN uf.user_id IS NOT NULL THEN true
                        ELSE false
                    END AS liked
                FROM products p
                INNER JOIN product_images pi
                    ON p.product_id = pi.product_id
                LEFT JOIN user_favorite_product_ids uf
                    ON p.product_id = uf.product_id
                WHERE pi.order_index = 1 AND
                      p.category_id = @CategoryId AND
                      uf.user_id = @UserId";

            IEnumerable<ProductShortDto> productsFromCategory =
                await connection.QueryAsync<ProductShortDto>(
                    sqlQuery,
                    new { request.CategoryId, UserId = Guid.Parse(request.UserId) }
                );

            return productsFromCategory;
        }
    }
}
