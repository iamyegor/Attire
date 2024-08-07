using Domain.DomainErrors;
using XResults;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class Image
    {
        public static Error ExtensionIsInvalid(string extension)
        {
            var details = new Dictionary<string, object?>() { ["extension"] = extension };
            return new Error("image.extension.is.invalid", "Image extension is invalid.", details);
        }

        public static Error OrderIndexMustBeGreaterThanZero(int orderIndex)
        {
            var details = new Dictionary<string, object?>() { ["orderIndex"] = orderIndex };
            return new Error(
                "image.order.index.must.be.greater.than.zero",
                "Image order index must be greater than zero.",
                details
            );
        }
    }
}
