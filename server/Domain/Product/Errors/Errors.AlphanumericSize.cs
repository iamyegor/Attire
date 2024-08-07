using Domain.DomainErrors;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class AlphanumericSize
    {
        public static Error ValueIsRequired()
        {
            return new Error(
                "alphanumeric.size.value.is.required",
                "Alphanumeric size value is required."
            );
        }
    }
}
