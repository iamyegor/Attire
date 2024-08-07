using Domain.DomainErrors;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class User
    {
        public static Error FirstNameIsRequired()
        {
            return new Error("user.first.name.is.required", "User first name is required.");
        }

        public static Error LastNameIsRequired()
        {
            return new Error("user.last.name.is.required", "User last name is required.");
        }
    }
}
