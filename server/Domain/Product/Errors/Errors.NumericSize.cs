using Domain.DomainErrors;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class NumericSize
    {
        public static Error ValueMustNotBeLessThanZeroAndGreaterThanSixty(int value)
        {
            var details = new Dictionary<string, object?>() { ["value"] = value };
            return new Error(
                "numeric.size.value.must.not.be.less.than.zero.and.greater.than.sixty",
                "Number size value must not be less than zero and greater than sixty.",
                details
            );
        }
    }
}
