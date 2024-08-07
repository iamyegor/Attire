using System.Text.RegularExpressions;
using Domain.DomainErrors;
using XResults;

namespace Domain.User.ValueObject;

public class Email : Common.ValueObject
{
    public string Value { get; }

    private Email(string value)
    {
        Value = value;
    }

    protected Email() { }

    public static Result<Email, Error> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return Errors.Errors.Email.IsRequired();
        }

        value = value.Trim();

        if (!Regex.IsMatch(value, @"^[^@]+@[^@]+\.[^@]+$"))
        {
            return Errors.Errors.Email.IsInvalid(value);
        }

        return new Email(value);
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        return new object?[] { Value };
    }
}
