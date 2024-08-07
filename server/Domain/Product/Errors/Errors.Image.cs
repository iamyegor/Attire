using Domain.DomainErrors;

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
    }
}
