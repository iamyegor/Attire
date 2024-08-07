using Domain.DomainErrors;
using XResults;

namespace Domain.Product.ValueObject;

public class AlphanumericSize : Size
{
    public string Value { get; }

    private AlphanumericSize(string value)
    {
        Value = value;
    }

    protected AlphanumericSize() { }

    public static Result<AlphanumericSize, Error> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return Errors.Errors.AlphanumericSize.ValueIsRequired();
        }

        value = value.Trim();

        return new AlphanumericSize(value);
    }

    public override string ToString()
    {
        return Value;
    }
}
