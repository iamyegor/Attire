namespace Domain.Product.ValueObject;

public abstract class Size : Common.ValueObject
{
    protected Size() { }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        return new object?[] { ToString() };
    }

    public abstract override string ToString();
}
