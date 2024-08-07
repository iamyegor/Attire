using Domain.DomainErrors;
using XResults;

namespace Domain.Product.ValueObject;

public class Size : Common.ValueObject
{
    public string Value { get; }

    protected Size() { }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        return new object?[] { ToString() };
    }

    private Size(string value)
    {
        Value = value;
    }

    public static Result<Size, Error> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return Errors.Errors.Size.IsRequired();
        }

        value = value.Trim();

        return new Size(value);
    }
}
