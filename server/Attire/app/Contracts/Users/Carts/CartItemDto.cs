namespace Contracts.Users.Carts;

public class CartItemDto
{
    public Guid Id { get; set; }
    public string ImagePath { get; set; }
    public Guid ProductId { get; set; }
    public string ProductTitle { get; set; }
    public int ProductPrice { get; set; }
    public string SKU { get; set; }
    public string Size { get; set; }
    public ColorDto Color { get; set; }
    public int Quantity { get; set; }
    public DateTime CreatedAt { get; set; }
}
