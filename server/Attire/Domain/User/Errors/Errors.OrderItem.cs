using Domain.DomainErrors;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class OrderItem
    {
        public static Error QuantityMustBeGreaterThanZero(int quantity)
        {
            var details = new Dictionary<string, object?>() { ["quantity"] = quantity };
            return new Error(
                "order.item.quantity.must.be.greater.than.zero",
                "Order item quantity must be greater than zero.",
                details
            );
        }
    }
}
