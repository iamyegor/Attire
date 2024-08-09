using Domain.DomainErrors;
using XResults;

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

        public static Error WithParametersAlreadyExists(Entities.CartItem cartItem)
        {
            var details = new Dictionary<string, object?>() { ["cartItem"] = cartItem };
            return new Error(
                "cart.item.with.parameters.already.exists",
                "Cart item with parameters already exists.",
                details
            );
        }
    }
}
