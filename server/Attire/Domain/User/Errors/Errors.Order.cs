using Domain.DomainErrors;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class Order
    {
        public static Error QuantityOfItemsMustNotBeLessThanOne(int quantityOfItems)
        {
            var details = new Dictionary<string, object?>()
            {
                ["quantityOfItems"] = quantityOfItems
            };
            return new Error(
                "order.quantity.of.items.must.not.be.less.than.one",
                "Order quantity of items must not be less than one.",
                details
            );
        }
    }
}
