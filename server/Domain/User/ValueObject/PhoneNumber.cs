using System.Text.RegularExpressions;
using Domain.DomainErrors;
using XResults;

namespace Domain.User.ValueObject;

public class PhoneNumber : Common.ValueObject
{
    public string Value { get; }

    private PhoneNumber(string value)
    {
        Value = value;
    }

    protected PhoneNumber() { }

    public static Result<PhoneNumber, Error> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return Errors.Errors.PhoneNumber.IsRequired();
        }

        value = value.Trim();

        if (!Regex.IsMatch(value, @"^(\+7\d{10})$"))
        {
            return Errors.Errors.PhoneNumber.IsInvalid(value);
        }

        return new PhoneNumber(value);
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        return new object?[] { Value };
    }
}
