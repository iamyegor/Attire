using Domain.DomainErrors;

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
    }
}
