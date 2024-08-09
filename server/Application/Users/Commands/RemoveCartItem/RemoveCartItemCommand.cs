using Domain.DomainErrors;
using Domain.User;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.RemoveCartItem;

public record RemoveCartItemCommand(Guid UserId, Guid RemovedCartItemId)
    : IRequest<SuccessOr<Error>>;

public class RemoveCartItemCommandHandler : IRequestHandler<RemoveCartItemCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public RemoveCartItemCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        RemoveCartItemCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        SuccessOr<Error> result = user.RemoveCartItem(request.RemovedCartItemId);

        if (result.IsFailure)
        {
            return result.Error;
        }

        await _context.SaveChangesAsync(cancellationToken);

        return result;
    }
}
