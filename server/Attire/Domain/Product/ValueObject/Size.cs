using Domain.DomainErrors;
using XResults;

namespace Domain.Product.ValueObject;

public class Size : Common.ValueObject
{
    public string Value { get; }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Value;
    }

    private Size(string value)
    {
        Value = value;
    }

    protected Size() { }

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
