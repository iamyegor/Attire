using Domain.DomainErrors;

namespace Domain.Category.Errors;

public static partial class Errors
{
    public class Category
    {
        public static Error NameIsRequired()
        {
            return new Error("category.name.is.required", "Category name is required.");
        }
    }
}
