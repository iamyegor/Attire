using Domain.DomainErrors;
using XResults;

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

        public static Error WithIdNofFound(Guid userId)
        {
            var details = new Dictionary<string, object?>() { ["userId"] = userId };
            return new Error("user.with.id.not.found", "User with id not found.", details);
        }
    }
}
