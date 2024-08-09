using Domain.DomainErrors;
using Domain.User;
using Domain.User.ValueObject;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.AddFavoriteProduct;

public record AddFavoriteProductCommand(Guid UserId, Guid FavoriteProductId)
    : IRequest<SuccessOr<Error>>;

public class AddFavoriteProductCommandHandler
    : IRequestHandler<AddFavoriteProductCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public AddFavoriteProductCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        AddFavoriteProductCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        if (
            await _context.Products.FindAsync([request.FavoriteProductId], cancellationToken)
            == null
        )
        {
            return Domain.Product.Errors.Errors.Product.WithIdNotFound(request.FavoriteProductId);
        }

        var favoriteProductId = new FavoriteProductId(request.FavoriteProductId);

        SuccessOr<Error> result = user.AddFavoriteProductId(favoriteProductId);

        if (result.IsFailure)
        {
            return result.Error;
        }

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
