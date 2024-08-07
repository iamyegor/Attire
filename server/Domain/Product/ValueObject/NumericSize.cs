using Domain.DomainErrors;
using XResults;

namespace Domain.Product.ValueObject;

public class NumericSize : Size
{
    public int Value { get; }

    private NumericSize(int value)
    {
        Value = value;
    }

    protected NumericSize() { }

    public static Result<NumericSize, Error> Create(int value)
    {
        if (value <= 0 || value > 60)
        {
            return Errors.Errors.NumericSize.ValueMustNotBeLessThanZeroAndGreaterThanSixty(value);
        }

        return new NumericSize(value);
    }

    public override string ToString()
    {
        return Value.ToString();
    }
}
