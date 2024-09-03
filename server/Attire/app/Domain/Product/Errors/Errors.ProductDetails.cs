using Domain.DomainErrors;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class ProductDetails
    {
        public static Error BrandIsRequired()
        {
            return new Error(
                "product.details.brand.is.required",
                "Product details brand is required."
            );
        }

        public static Error SKUIsRequired()
        {
            return new Error("product.details.sku.is.required", "Product details SKU is required.");
        }

        public static Error CompositionIsRequired()
        {
            return new Error(
                "product.details.composition.is.required",
                "Product details composition is required."
            );
        }
    }
}
