using Domain.DomainErrors;
using XResults;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class User
    {
        public static Error FirstNameIsRequired()
        {
            return new Error("user.first.name.is.required", "User first name is required.");
        }

        public static Error LastNameIsRequired()
        {
            return new Error("user.last.name.is.required", "User last name is required.");
        }

        public static Error WithIdNofFound(Guid userId)
        {
            var details = new Dictionary<string, object?>() { ["userId"] = userId };
            return new Error("user.with.id.not.found", "User with id not found.", details);
        }

        public static Error CartItemWithIdNotFound(Guid cartItemId)
        {
            var details = new Dictionary<string, object?>() { ["cartItemId"] = cartItemId };
            return new Error(
                "user.cart.item.with.id.not.found",
                "User cart item with id not found.",
                details
            );
        }

        public static Error FavoriteProductIdWithValueAlreadyExists(Guid favoriteProductId)
        {
            var details = new Dictionary<string, object?>()
            {
                ["favoriteProductId"] = favoriteProductId
            };
            return new Error(
                "user.favorite.product.id.with.value.already.exists",
                "User favorite product id with value already exists.",
                details
            );
        }

        public static Error FavoriteProductIdWithValueNotFound(Guid favoriteProductId)
        {
            var details = new Dictionary<string, object?>()
            {
                ["favoriteProductId"] = favoriteProductId
            };
            return new Error(
                "user.favorite.product.id.with.value.not.found",
                "User favorite product id with value not found.",
                details
            );
        }
    }
}
