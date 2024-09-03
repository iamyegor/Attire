using Domain.DomainErrors;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class Size
    {
        public static Error IsRequired()
        {
            return new Error("size.is.required", "Size is required.");
        }
    }
}
