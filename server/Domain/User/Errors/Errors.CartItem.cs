using Domain.DomainErrors;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class CartItem
    {
        public static Error QuantityMustBeGreaterThanZero(int quantity)
        {
            var details = new Dictionary<string, object?>() { ["quantity"] = quantity };
            return new Error(
                "card.item.quantity.must.be.greater.than.zero",
                "Card item quantity must be greater than zero.",
                details
            );
        }
    }
}
