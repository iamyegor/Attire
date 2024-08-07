using Domain.DomainErrors;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class Email
    {
        public static Error IsRequired()
        {
            return new Error("email.is.required", "Email is required.");
        }

        public static Error IsInvalid(string email)
        {
            var details = new Dictionary<string, object?>() { ["email"] = email };
            return new Error("email.is.invalid", "Email is invalid.", details);
        }
    }
}
