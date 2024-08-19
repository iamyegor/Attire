using Domain.DomainErrors;
using XResults;

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

        public static Error IsTaken(string phone)
        {
            var details = new Dictionary<string, object?>() { ["phone"] = phone };
            return new Error("phone.number.is.taken", "Phone number is taken.", details);
        }
    }
}
