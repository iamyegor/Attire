using Domain.DomainErrors;

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

        public static Error WithIdNotFound(Guid reviewId)
        {
            var details = new Dictionary<string, object?>() { ["reviewId"] = reviewId };
            return new Error("review.with.id.not.found", "Review with id not found.", details);
        }

        public static Error DoesNotBelongToThisUser(Guid reviewId, Guid userId)
        {
            var details = new Dictionary<string, object?>()
            {
                ["reviewId"] = reviewId,
                ["userId"] = userId
            };
            return new Error(
                "review.does.not.belong.to.this.user",
                "Review does not belong to this user.",
                details
            );
        }
    }
}
