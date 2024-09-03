namespace Domain.User.ValueObject;

public class FavoriteProductId : Common.ValueObject
{
    public Guid Value { get; }

    public FavoriteProductId(Guid value)
    {
        Value = value;
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Value;
    }
}
