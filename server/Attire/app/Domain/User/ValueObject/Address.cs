using System.Text.RegularExpressions;
using Domain.DomainErrors;
using XResults;

namespace Domain.User.ValueObject;

public class Address : Common.ValueObject
{
    public string City { get; }
    public string PostIndex { get; }
    public string Street { get; }
    public string House { get; }
    public string Flat { get; }

    private Address(string city, string postIndex, string street, string house, string flat)
    {
        City = city;
        PostIndex = postIndex;
        Street = street;
        House = house;
        Flat = flat;
    }

    protected Address() { }

    public static Result<Address, Error> Create(
        string city,
        string postIndex,
        string street,
        string house,
        string flat
    )
    {
        if (string.IsNullOrWhiteSpace(city))
        {
            return Errors.Errors.Address.CityIsRequired();
        }

        city = city.Trim();

        if (string.IsNullOrWhiteSpace(postIndex))
        {
            return Errors.Errors.Address.PostIndexIsRequired();
        }

        postIndex = postIndex.Trim();

        if (!Regex.IsMatch(postIndex, @"^\d{6}$"))
        {
            return Errors.Errors.Address.PostIndexIsInvalid(postIndex);
        }

        if (string.IsNullOrWhiteSpace(street))
        {
            return Errors.Errors.Address.StreetIsRequired();
        }

        street = street.Trim();

        if (string.IsNullOrWhiteSpace(house))
        {
            return Errors.Errors.Address.HouseIsRequired();
        }

        house = house.Trim();

        if (string.IsNullOrWhiteSpace(flat))
        {
            return Errors.Errors.Address.FlatIsRequired();
        }

        flat = flat.Trim();

        return new Address(city, postIndex, street, house, flat);
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        return new object?[] { City, PostIndex, Street, House, Flat };
    }
}
