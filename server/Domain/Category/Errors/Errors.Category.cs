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

        public static Error WithIdNotFound(Guid categoryId)
        {
            var details = new Dictionary<string, object?>() { ["categoryId"] = categoryId };
            return new Error("category.with.id.not.found", "Category with id not found.", details);
        }
    }
}
