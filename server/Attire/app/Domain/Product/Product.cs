using Domain.Common;
using Domain.DomainErrors;
using Domain.Product.Entities;
using Domain.Product.ValueObject;
using XResults;

namespace Domain.Product;

public class Product : AggregateRoot<Guid>
{
    private readonly List<Review> _reviews = new();
    private readonly List<Image> _images = new();
    private readonly List<Color> _colors = new();
    private readonly List<Size> _sizes = new();

    public int Price { get; }
    public string Title { get; }
    public string TitleEn { get; }
    public string Description { get; }
    public string DescriptionEn { get; }
    public ProductDetails Details { get; }
    public double Stars { get; private set; }
    public DateTime CreationDate { get; }
    public bool IsNew { get; }
    public Guid CategoryId { get; }
    public IReadOnlyList<Review> Reviews => _reviews;
    public IReadOnlyList<Image> Images => _images;
    public IReadOnlyList<Color> Colors => _colors;

    public IReadOnlyList<Size> Sizes => _sizes;

    private Product(
        int price,
        string title,
        string titleEn,
        string description,
        string descriptionEn,
        ProductDetails details,
        double stars,
        DateTime creationDate,
        bool isNew,
        Guid categoryId,
        List<Color> colors,
        List<Size> sizes
    )
        : base(Guid.NewGuid())
    {
        Price = price;
        Title = title;
        TitleEn = titleEn;
        Description = description;
        DescriptionEn = descriptionEn;
        Details = details;
        Stars = stars;
        CreationDate = creationDate;
        IsNew = isNew;
        CategoryId = categoryId;
        _colors = colors;
        _sizes = sizes;
    }

    protected Product()
        : base(Guid.NewGuid()) { }

    public SuccessOr<Error> AddReview(Review createdReview)
    {
        if (_reviews.FirstOrDefault(x => x.UserId == createdReview.UserId) != null)
        {
            return Errors.Errors.Product.ReviewWithUserIdAlreadyExists(createdReview.UserId);
        }

        _reviews.Add(createdReview);

        CalculateStars();

        return Result.Ok();
    }

    public SuccessOr<Error> RemoveReview(Guid removedReviewId, Guid userId)
    {
        Review? removedReview = _reviews.FirstOrDefault(x => x.Id == removedReviewId);

        if (removedReview == null)
        {
            return Errors.Errors.Review.WithIdNotFound(removedReviewId);
        }

        if (removedReview.UserId != userId)
        {
            return Errors.Errors.Review.DoesNotBelongToThisUser(removedReview.Id, userId);
        }

        _reviews.Remove(removedReview);

        CalculateStars();

        return Result.Ok();
    }

    private void CalculateStars()
    {
        double stars = _reviews.Sum(x => x.Stars) / _reviews.Count;

        Stars = Math.Round(stars, 1);
    }
}
