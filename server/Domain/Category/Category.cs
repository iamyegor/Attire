using Domain.Category.ValueObject;
using Domain.Common;
using Domain.DomainErrors;
using XResults;

namespace Domain.Category;

public class Category : AggregateRoot<Guid>
{
    private readonly List<Product.Product> _products = new();

    public string Name { get; }
    public Gender Gender { get; }
    public IReadOnlyList<Product.Product> Products => _products;

    private Category()
        : base(Guid.NewGuid()) { }

    private Category(string name, Gender gender)
        : base(Guid.NewGuid())
    {
        Name = name;
        Gender = gender;
    }

    public static Result<Category, Error> Create(string name, Gender gender)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            return Errors.Errors.Category.NameIsRequired();
        }

        name = name.Trim();

        return new Category(name, gender);
    }
}
