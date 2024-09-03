using Domain.DomainErrors;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class Color
    {
        public static Error HexIsRequired()
        {
            return new Error("color.hex.is.required", "Color hex is required.");
        }

        public static Error NameIsRequired()
        {
            return new Error("color.name.is.required", "Color name is required.");
        }

        public static Error HexIsInvalid(string hex)
        {
            var details = new Dictionary<string, object?>() { ["hex"] = hex };
            return new Error("color.hex.is.invalid", "Color hex is invalid.", details);
        }
    }
}
