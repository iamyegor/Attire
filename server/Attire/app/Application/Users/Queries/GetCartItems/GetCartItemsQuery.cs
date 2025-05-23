﻿using Dapper;
using Domain.DomainErrors;
using Infrastructure.Data;
using Infrastructure.Data.Dapper;
using MediatR;
using Npgsql;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Queries.GetCartItems;

public record GetCartItemsQuery(Guid UserId) : IRequest<Result<IEnumerable<CartItemModel>, Error>>;

public class GetCartItemsQueryHandler
    : IRequestHandler<GetCartItemsQuery, Result<IEnumerable<CartItemModel>, Error>>
{
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetCartItemsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<Result<IEnumerable<CartItemModel>, Error>> Handle(
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
                p.title_en as product_title_en,
                p.price as product_price,
                p.sku as s_k_u,
                uci.size,
                uci.color_hex,
                uci.color_name,
                uci.color_name_en,
                uci.quantity,
                uci.created_at
            FROM user_cart_items uci
            LEFT JOIN products p
                ON p.product_id = uci.product_id
            LEFT JOIN product_images i  
                ON p.product_id = i.product_id
            WHERE 
                i.order_index = 1 AND
                uci.user_id = @UserId";

        IEnumerable<CartItemModel> cartItems = await connection.QueryAsync<CartItemModel>(
            sqlQuery,
            new { request.UserId }
        );

        return Result.Ok(cartItems);
    }
}
