using Domain.Common;
using Domain.DomainErrors;
using Domain.Product.ValueObject;
using XResults;

namespace Domain.User.Entities;

public class CartItem : Entity<Guid>
{
    public Guid ProductId { get; }
    public int Quantity { get; }
    public Size Size { get; }
    public Color Color { get; }

    private CartItem(Guid productId, int quantity, Size size, Color color)
        : base(Guid.NewGuid())
    {
        ProductId = productId;
        Quantity = quantity;
        Size = size;
        Color = color;
    }

    public static Result<CartItem, Error> Create(
        Guid productId,
        int quantity,
        Size size,
        Color color
    )
    {
        if (quantity <= 0)
        {
            return Errors.Errors.CartItem.QuantityMustBeGreaterThanZero(quantity);
        }

        return new CartItem(productId, quantity, size, color);
    }

    protected CartItem()
        : base(Guid.NewGuid()) { }
}
