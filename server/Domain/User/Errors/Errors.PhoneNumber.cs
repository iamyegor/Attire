using Domain.DomainErrors;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class PhoneNumber
    {
        public static Error IsRequired()
        {
            return new Error("phone.number.is.required", "Phone number is required.");
        }

        public static Error IsInvalid(string value)
        {
            var details = new Dictionary<string, object?>() { ["phoneNumber"] = value };
            return new Error("phone.number.is.invalid", "Phone number is invalid.", details);
        }
    }
}
