using Domain.DomainErrors;
using XResults;

namespace Domain.Product.Errors;

public static partial class Errors
{
    public class Review
    {
        public static Error ContentIsRequired()
        {
            return new Error("review.content.is.required", "Review content is required.");
        }

        public static Error AdvantagesIsRequired()
        {
            return new Error("advantages.content.is.required", "Advantages content is required.");
        }

        public static Error DisadvantagesIsRequired()
        {
            return new Error(
                "disadvantages.content.is.required",
                "Disadvantages content is required."
            );
        }

        public static Error StarsMustNotBeLessOneAndGreaterFive(int stars)
        {
            var details = new Dictionary<string, object?>() { ["stars"] = stars };
            return new Error(
                "review.stars.must.not.be.less.one.and.greater.five",
                "Review stars must not be less one and greater five.",
                details
            );
        }

        public static Error ShelfLifeNotFound(int shelfLife)
        {
            var details = new Dictionary<string, object?>() { ["shelfLife"] = shelfLife };
            return new Error(
                "review.shelf.life.not.found",
                "Review shelf life not found.",
                details
            );
        }
    }
}
