using Dapper;
using Infrastructure.Data;
using MediatR;
using Npgsql;

namespace Application.Users.Queries.GetCartItems;

public record GetCartItemsQuery(Guid UserId, int Page) : IRequest<GetCartItemsPaginationResult>;

public class GetCartItemsQueryHandler
    : IRequestHandler<GetCartItemsQuery, GetCartItemsPaginationResult>
{
    private const int PageLimit = 10;
    private readonly DapperConnectionFactory _dapperConnectionFactory;

    public GetCartItemsQueryHandler(DapperConnectionFactory dapperConnectionFactory)
    {
        _dapperConnectionFactory = dapperConnectionFactory;
    }

    public async Task<GetCartItemsPaginationResult> Handle(
        GetCartItemsQuery request,
        CancellationToken cancellationToken
    )
    {
        int currentPage = request.Page <= 0 ? 1 : request.Page;

        NpgsqlConnection connection = _dapperConnectionFactory.Create();

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
                uci.user_id = @UserId
            LIMIT @PageLimit
            OFFSET @Skip";

        IEnumerable<CartItemDto> cartItems = await connection.QueryAsync<CartItemDto>(
            sqlQuery,
            new
            {
                request.UserId,
                PageLimit,
                Skip = (currentPage - 1) * PageLimit
            }
        );

        int? nextPageNumber = await GetNextPageNumberOrNull(
            connection,
            request.UserId,
            currentPage
        );

        return new GetCartItemsPaginationResult(cartItems, nextPageNumber);
    }

    private async Task<int?> GetNextPageNumberOrNull(
        NpgsqlConnection connection,
        Guid userId,
        int page
    )
    {
        int productTotalCount = await connection.QuerySingleAsync<int>(
            "SELECT COUNT(1) FROM user_cart_items WHERE user_id = @UserId",
            new { UserId = userId }
        );

        int? nextPage = PageLimit * page >= productTotalCount ? null : page + 1;

        return nextPage;
    }
}
