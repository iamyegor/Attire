using Domain.Common;
using Domain.DomainErrors;
using XResults;

namespace Domain.User.Entities;

public class Order : Entity<Guid>
{
    private readonly List<OrderItem> _items;

    public int Cost { get; }
    public DateTime DeliveryDate { get; } = DateTime.UtcNow;
    public IReadOnlyList<OrderItem> Items => _items;

    private Order(int cost, List<OrderItem> items)
        : base(Guid.NewGuid())
    {
        Cost = cost;
        _items = items;
    }

    public static Result<Order, Error> Create(List<OrderItem> items)
    {
        if (items.Count < 1)
        {
            return Errors.Errors.Order.QuantityOfItemsMustNotBeLessThanOne(items.Count);
        }

        int cost = items.Sum(item => item.Quantity * item.PriceForOneProduct);

        return new Order(cost, items);
    }

    protected Order()
        : base(Guid.NewGuid()) { }
}
