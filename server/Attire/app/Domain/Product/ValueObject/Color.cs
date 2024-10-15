using System.Text.RegularExpressions;
using Domain.DomainErrors;
using XResults;

namespace Domain.Product.ValueObject;

public class Color : Common.ValueObject
{
    public string Hex { get; }
    public string Name { get; }
    public string NameEn { get; }

    private Color(string hex, string name, string nameEn)
    {
        Hex = hex;
        Name = name;
        NameEn = nameEn;
    }

    protected Color() { }

    public static Result<Color, Error> Create(string hex, string name, string nameEn)
    {
        if (string.IsNullOrWhiteSpace(hex))
        {
            return Errors.Errors.Color.HexIsRequired();
        }

        if (string.IsNullOrWhiteSpace(name))
        {
            return Errors.Errors.Color.NameIsRequired();
        }

        if (string.IsNullOrWhiteSpace(nameEn))
        {
            return Errors.Errors.Color.NameIsRequired();
        }

        hex = hex.Trim();
        name = name.Trim();
        nameEn = nameEn.Trim();

        if (!Regex.IsMatch(hex, @"^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$"))
        {
            return Errors.Errors.Color.HexIsInvalid(hex);
        }

        return new Color(hex, name, nameEn);
    }

    protected override IEnumerable<object> GetEqualityComponents()
    {
        yield return Hex;
        yield return Name;
    }
}
