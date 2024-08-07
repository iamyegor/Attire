using Domain.DomainErrors;
using XResults;

namespace Domain.User.Errors;

public static partial class Errors
{
    public class Address
    {
        public static Error CityIsRequired()
        {
            return new Error("address.city.is.required", "Address city is required.");
        }

        public static Error PostIndexIsRequired()
        {
            return new Error("address.post.index.is.required", "Address post index is required.");
        }

        public static Error PostIndexIsInvalid(string postIndex)
        {
            var details = new Dictionary<string, object?>() { ["postIndex"] = postIndex };
            return new Error("address.post.index.is.invalid", "Address post index is invalid.");
        }

        public static Error StreetIsRequired()
        {
            return new Error("address.street.is.required", "Address street is required.");
        }

        public static Error HouseIsRequired()
        {
            return new Error("address.house.is.required", "Address house is required.");
        }

        public static Error FlatIsRequired()
        {
            return new Error("address.flat.is.required", "Address flat is required.");
        }
    }
}
