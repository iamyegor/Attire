using Domain.DomainErrors;
using Domain.User;
using Domain.User.ValueObject;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.RemoveFavoriteProduct;

public record RemoveFavoriteProductCommand(Guid UserId, Guid RemovedFavoriteProductId)
    : IRequest<SuccessOr<Error>>;

public class RemoveFavoriteProductCommandHandler
    : IRequestHandler<RemoveFavoriteProductCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public RemoveFavoriteProductCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        RemoveFavoriteProductCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        var removedFavoriteProductId = new FavoriteProductId(request.RemovedFavoriteProductId);

        SuccessOr<Error> result = user.RemoveFavoriteProductId(removedFavoriteProductId);

        if (result.IsFailure)
        {
            return result.Error;
        }

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
