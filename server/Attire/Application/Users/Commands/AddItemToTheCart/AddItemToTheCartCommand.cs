using Domain.DomainErrors;
using Domain.Product;
using Domain.Product.ValueObject;
using Domain.User;
using Domain.User.Entities;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.Product.Errors.Errors;

namespace Application.Users.Commands.AddItemToTheCart;

public record AddItemToTheCartCommand(
    Guid ProductId,
    int Quantity,
    string Size,
    string Color,
    Guid UserId
) : IRequest<Result<Guid, Error>>;

public class AddItemToTheCartCommandHandler
    : IRequestHandler<AddItemToTheCartCommand, Result<Guid, Error>>
{
    private readonly ApplicationContext _context;

    public AddItemToTheCartCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<Result<Guid, Error>> Handle(
        AddItemToTheCartCommand request,
        CancellationToken ct
    )
    {
        Product? product = await _context.Products.FindAsync([request.ProductId], ct);

        if (product == null)
        {
            return Errors.Product.WithIdNotFound(request.ProductId);
        }

        User? user = await _context.Users.FindAsync([request.UserId], ct);
        if (user == null)
        {
            return Domain.User.Errors.Errors.User.WithIdNotFound(request.UserId);
        }

        Color? color = product.Colors.FirstOrDefault(x =>
            string.Equals(x.Name, request.Color, StringComparison.OrdinalIgnoreCase)
        );
        if (color == null)
        {
            return Errors.Product.ColorNotFound(product.Id, request.Color);
        }

        CartItem newCartItem = CartItem.Create(
            request.ProductId,
            request.Quantity,
            Size.Create(request.Size),
            color
        );

        SuccessOr<Error> addCartItemResult = user.AddCartItem(product, newCartItem);

        if (addCartItemResult.IsFailure)
        {
            return addCartItemResult.Error;
        }

        await _context.SaveChangesAsync(ct);

        return newCartItem.Id;
    }
}
