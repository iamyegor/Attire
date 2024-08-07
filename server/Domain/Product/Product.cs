using System.Net.Mime;
using Domain.Common;
using Domain.Product.Entities;
using Domain.Product.ValueObject;

namespace Domain.Product;

public class Product : AggregateRoot<Guid>
{
    private readonly List<Review> _reviews = new();
    private readonly List<Image> _images = new();

    public int Price { get; }
    public string Title { get; }
    public string Description { get; }
    public Color Color { get; }
    public Size Size { get; }
    public ProductDetails Details { get; }
    public double Stars { get; }
    public DateTime CreationDate { get; }
    public bool IsNew { get; }
    public Guid CategoryId { get; }
    public IReadOnlyList<Review> Reviews => _reviews;
    public virtual IReadOnlyList<Image> Images => _images;

    private Product(
        int price,
        string title,
        string description,
        Color color,
        Size size,
        ProductDetails details,
        double stars,
        DateTime creationDate,
        bool isNew,
        Guid categoryId
    )
        : base(Guid.NewGuid())
    {
        Price = price;
        Title = title;
        Description = description;
        Color = color;
        Size = size;
        Details = details;
        Stars = stars;
        CreationDate = creationDate;
        IsNew = isNew;
        CategoryId = categoryId;
    }

    protected Product()
        : base(Guid.NewGuid()) { }
}
