namespace Application.Users.Queries.GetCartItems;

public record GetCartItemsPaginationResult(IEnumerable<CartItemDto> CartItems, int? NextPageNumber);

public class CartItemDto
{
    public Guid Id { get; set; }
    public string ImagePath { get; set; }
    public Guid ProductId { get; set; }
    public string ProductTitle { get; set; }
    public int ProductPrice { get; set; }
    public string SKU { get; set; }
    public string Size { get; set; }
    public string ColorName { get; set; }
    public string ColorHex { get; set; }
    public int Quantity { get; set; }
}
