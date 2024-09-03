using Domain.DomainErrors;
using XResults;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class Product
    {
        public static Error WithIdNotFound(Guid productId)
        {
            var details = new Dictionary<string, object?>() { ["productId"] = productId };
            return new Error("product.with.id.not.found", "Product with id not found.", details);
        }

        public static Error ReviewWithUserIdAlreadyExists(Guid userId)
        {
            var details = new Dictionary<string, object?>() { ["userId"] = userId };
            return new Error(
                "product.review.from.this.user.already.exists",
                "Product review from this user already exists.",
                details
            );
        }

        public static Error ColorNotFound(Guid productId, string colorName)
        {
            var details = new Dictionary<string, object?>()
            {
                ["productId"] = productId,
                ["colorName"] = colorName
            };
            return new Error("product.color.not.found", "Product color not found.", details);
        }

        public static Error SizeWithValueNotFound(string size)
        {
            var details = new Dictionary<string, object?>() { ["size"] = size };
            return new Error(
                "product.size.with.value.not.found",
                "Product size with value not found.",
                details
            );
        }

        public static Error NotFound()
        {
            return new Error("product.not.found", "Product not found.");
        }
    }
}
