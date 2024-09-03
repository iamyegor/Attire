using Domain.Common;
using Domain.DomainErrors;
using Domain.User.Entities;
using Domain.User.ValueObject;
using XResults;

namespace Domain.User;

public class User : AggregateRoot<Guid>
{
    private readonly List<FavoriteProductId> _favoriteProductIds = [];
    private readonly List<CartItem> _cart = [];
    private readonly List<Order> _orders = [];

    public string? FirstName { get; private set; }
    public Email Email { get; private set; }
    public Address? Address { get; private set; }
    public virtual IReadOnlyList<FavoriteProductId> FavoriteProductIds => _favoriteProductIds;
    public virtual IReadOnlyList<CartItem> Cart => _cart;
    public virtual IReadOnlyList<Order> Orders => _orders;

    private User(string firstName, Email email, Address? address = null, Guid? id = null)
        : base(id ?? Guid.NewGuid())
    {
        FirstName = firstName;
        Email = email;
        Address = address;
    }

    protected User()
        : base(Guid.NewGuid()) { }

    public static Result<User, Error> Create(
        string? firstName,
        Email email,
        Address? address = null,
        Guid? id = null
    )
    {
        if (string.IsNullOrWhiteSpace(firstName))
        {
            return Errors.Errors.User.FirstNameIsRequired();
        }

        firstName = firstName.Trim();

        return new User(firstName, email, address, id);
    }

    public SuccessOr<Error> AddCartItem(Product.Product product, CartItem newCartItem)
    {
        if (_cart.Count >= 100)
        {
            return Errors.Errors.CartItem.CountMustBeLessThan100();
        }

        if (product.Sizes.FirstOrDefault(x => x.Value == newCartItem.Size.Value) == null)
        {
            return Product.Errors.Errors.Product.SizeWithValueNotFound(newCartItem.Size.Value);
        }

        if (
            _cart.FirstOrDefault(x =>
                x.ProductId == newCartItem.ProductId
                && x.Size == newCartItem.Size
                && x.Color == newCartItem.Color
            ) != null
        )
        {
            return Errors.Errors.CartItem.WithParametersAlreadyExists(newCartItem);
        }

        _cart.Add(newCartItem);

        return Result.Ok();
    }

    public SuccessOr<Error> ChangeQuantityOfProductsInCartItem(Guid cartItemId, int changedQuantity)
    {
        CartItem? cartItem = _cart.FirstOrDefault(x => x.Id == cartItemId);

        if (cartItem == null)
        {
            return Errors.Errors.User.CartItemWithIdNotFound(cartItemId);
        }

        SuccessOr<Error> result = cartItem.SetQuantity(changedQuantity);

        return result;
    }

    public SuccessOr<Error> RemoveCartItem(Guid removedCartItemId)
    {
        CartItem? cartItem = _cart.FirstOrDefault(x => x.Id == removedCartItemId);

        if (cartItem == null)
        {
            return Errors.Errors.User.CartItemWithIdNotFound(removedCartItemId);
        }

        _cart.Remove(cartItem);

        return Result.Ok();
    }

    public SuccessOr<Error> AddFavoriteProductId(FavoriteProductId addedFavoriteProductId)
    {
        if (_favoriteProductIds.Contains(addedFavoriteProductId))
        {
            return Errors.Errors.User.FavoriteProductIdWithValueAlreadyExists(
                addedFavoriteProductId.Value
            );
        }

        _favoriteProductIds.Add(addedFavoriteProductId);

        return Result.Ok();
    }

    public SuccessOr<Error> RemoveFavoriteProductId(FavoriteProductId removedFavoriteProductId)
    {
        FavoriteProductId? favoriteProductId = _favoriteProductIds.FirstOrDefault(x =>
            x.Value == removedFavoriteProductId.Value
        );

        if (favoriteProductId == null)
        {
            return Errors.Errors.User.FavoriteProductIdWithValueNotFound(
                removedFavoriteProductId.Value
            );
        }

        _favoriteProductIds.Remove(favoriteProductId);

        return Result.Ok();
    }

    public void SetAddress(Address address)
    {
        Address = address;
    }

    public void UpdatePersonalData(string firstName, Email email)
    {
        if (string.IsNullOrWhiteSpace(firstName))
        {
            throw new InvalidOperationException("User first name is required.");
        }

        FirstName = firstName.Trim();
        Email = email;
    }

    public void AddOrder(Order createdOrder, List<CartItem> createdOrderCartItems)
    {
        _orders.Add(createdOrder);

        createdOrderCartItems.ForEach(cartItem => _cart.Remove(cartItem));
    }
}
