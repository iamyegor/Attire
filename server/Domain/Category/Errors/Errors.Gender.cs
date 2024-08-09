using Domain.DomainErrors;

namespace Domain.Category.Errors;

public static partial class Errors
{
    public class Gender
    {
        public static Error IsInvalid(string gender)
        {
            var details = new Dictionary<string, object?>() { ["gender"] = gender };
            return new Error("gender.is.invalid", "Gender is invalid", details);
        }
    }
}
