using Domain.Common;
using Domain.DomainErrors;
using Domain.Product.ValueObject;
using XResults;

namespace Domain.User.Entities;

public class OrderItem : Entity<Guid>
{
    public Guid ProductId { get; }
    public int PriceForOneProduct { get; }
    public int Quantity { get; }
    public Size Size { get; }
    public Color Color { get; }

    private OrderItem(Guid productId, int quantity, Size size, Color color, int priceForOneProduct)
        : base(Guid.NewGuid())
    {
        ProductId = productId;
        Quantity = quantity;
        Size = size;
        Color = color;
        PriceForOneProduct = priceForOneProduct;
    }

    public static Result<OrderItem, Error> Create(
        Product.Product product,
        int quantity,
        Size size,
        Color color
    )
    {
        if (quantity <= 0)
        {
            return Errors.Errors.OrderItem.QuantityMustBeGreaterThanZero(quantity);
        }

        return new OrderItem(product.Id, quantity, size, color, product.Price);
    }

    protected OrderItem()
        : base(Guid.NewGuid()) { }
}
