using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Queries.GetCartItems;

public record GetCartItemsQuery(Guid UserId) : IRequest<Result<IEnumerable<CartItemDto>, Error>>;

public class GetCartItemsQueryHandler
    : IRequestHandler<GetCartItemsQuery, Result<IEnumerable<CartItemDto>, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetCartItemsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<IEnumerable<CartItemDto>, Error>> Handle(
        GetCartItemsQuery request,
        CancellationToken cancellationToken
    )
    {
        NpgsqlConnection connection = _dapperConnectionFactory.Create();

        if (
            await connection.QuerySingleOrDefaultAsync(
                "SELECT 1 FROM users WHERE user_id = @UserId LIMIT 1",
                new { request.UserId }
            ) == null
        )
        {
            return Errors.User.WithIdNotFound(request.UserId);
        }

        string sqlQuery =
            @"
            SELECT 
                uci.cart_item_id as id,
                i.path as image_path,
                p.product_id, 
                p.title as product_title,
                p.price as product_price,
                p.sku as s_k_u,
                uci.size,
                uci.color_hex,
                uci.color_name,
                uci.quantity
            FROM user_cart_items uci
            LEFT JOIN products p
                ON p.product_id = uci.product_id
            LEFT JOIN product_images i  
                ON p.product_id = i.product_id
            WHERE 
                i.order_index = 1 AND
                uci.user_id = @UserId";

        IEnumerable<CartItemDto> cartItems = await connection.QueryAsync<CartItemDto>(
            sqlQuery,
            new { request.UserId }
        );

        return Result.Ok(cartItems);
    }
}
