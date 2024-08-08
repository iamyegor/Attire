using Domain.Common;
using Domain.DomainErrors;
using Domain.User.Entities;
using Domain.User.ValueObject;
using XResults;

namespace Domain.User;

public class User : AggregateRoot<Guid>
{
    private readonly List<FavoriteProductId> _favoriteProductIds = new();
    private readonly List<CartItem> _cart = new();
    private readonly List<Order> _orders = new();

    public string FirstName { get; }
    public string LastName { get; }
    public PhoneNumber Phone { get; }
    public Email Email { get; }
    public Address Address { get; }
    public virtual IReadOnlyList<FavoriteProductId> FavoriteProductIds => _favoriteProductIds;
    public virtual IReadOnlyList<CartItem> Cart => _cart;
    public virtual IReadOnlyList<Order> Orders => _orders;

    private User(string firstName, string lastName, PhoneNumber phone, Email email, Address address)
        : base(Guid.NewGuid())
    {
        FirstName = firstName;
        LastName = lastName;
        Phone = phone;
        Email = email;
        Address = address;
    }

    protected User()
        : base(Guid.NewGuid()) { }

    public static Result<User, Error> Crete(
        string firstName,
        string lastName,
        PhoneNumber phone,
        Email email,
        Address address
    )
    {
        if (string.IsNullOrWhiteSpace(firstName))
        {
            return Errors.Errors.User.FirstNameIsRequired();
        }

        if (string.IsNullOrWhiteSpace(lastName))
        {
            return Errors.Errors.User.LastNameIsRequired();
        }

        firstName = firstName.Trim();
        lastName = lastName.Trim();

        return new User(firstName, lastName, phone, email, address);
    }
}
