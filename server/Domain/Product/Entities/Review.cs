using Domain.Common;
using Domain.DomainErrors;
using Domain.Product.ValueObject;
using XResults;

namespace Domain.Product.Entities;

public class Review : Entity<Guid>
{
    public Guid UserId { get; }
    public ShelfLife ShelfLife { get; }
    public bool SizeMatches { get; }
    public string Content { get; }
    public string Advantages { get; }
    public string Disadvantages { get; }
    public DateTime CreationDate { get; } = DateTime.UtcNow;
    public int Stars { get; }

    private Review(
        Guid userId,
        ShelfLife shelfLife,
        bool sizeMatches,
        string content,
        string advantages,
        string disadvantages,
        int stars
    )
        : base(Guid.NewGuid())
    {
        UserId = userId;
        ShelfLife = shelfLife;
        SizeMatches = sizeMatches;
        Content = content;
        Advantages = advantages;
        Disadvantages = disadvantages;
        Stars = stars;
    }

    public static Result<Review, Error> Create(
        Guid userId,
        ShelfLife shelfLife,
        bool sizeMatches,
        string content,
        string advantages,
        string disadvantages,
        int stars
    )
    {
        if (string.IsNullOrWhiteSpace(content))
        {
            return Errors.Errors.Review.ContentIsRequired();
        }

        if (string.IsNullOrWhiteSpace(advantages))
        {
            return Errors.Errors.Review.AdvantagesIsRequired();
        }

        if (string.IsNullOrWhiteSpace(disadvantages))
        {
            return Errors.Errors.Review.DisadvantagesIsRequired();
        }

        if (stars < 1 || stars > 5)
        {
            return Errors.Errors.Review.StarsMustNotBeLessOneAndGreaterFive(stars);
        }

        content = content.Trim();
        advantages = advantages.Trim();
        disadvantages = disadvantages.Trim();

        return new Review(
            userId,
            shelfLife,
            sizeMatches,
            content,
            advantages,
            disadvantages,
            stars
        );
    }

    protected Review()
        : base(Guid.NewGuid()) { }
}
