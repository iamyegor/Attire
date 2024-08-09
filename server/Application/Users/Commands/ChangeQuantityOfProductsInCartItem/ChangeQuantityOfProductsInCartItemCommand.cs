using Domain.DomainErrors;
using Domain.User;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.ChangeQuantityOfProductsInCartItem;

public record ChangeQuantityOfProductsInCartItemCommand(
    Guid UserId,
    Guid CartItemId,
    int ChangedQuantity
) : IRequest<SuccessOr<Error>>;

public class ChangeQuantityOfProductsInCartItemCommandHandler
    : IRequestHandler<ChangeQuantityOfProductsInCartItemCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public ChangeQuantityOfProductsInCartItemCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        ChangeQuantityOfProductsInCartItemCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        SuccessOr<Error> result = user.ChangeQuantityOfProductsInCartItem(request.CartItemId, request.ChangedQuantity);

        if (result.IsFailure)
        {
            return result.Error;
        }

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
