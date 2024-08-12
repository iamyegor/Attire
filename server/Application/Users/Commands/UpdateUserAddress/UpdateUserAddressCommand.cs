using Domain.DomainErrors;
using Domain.User;
using Domain.User.ValueObject;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.UpdateUserAddress;

public record UpdateUserAddressCommand(
    Guid UserId,
    string City,
    string PostIndex,
    string Street,
    string House,
    string Flat
) : IRequest<SuccessOr<Error>>;

public class UpdateUserAddressCommandHandler
    : IRequestHandler<UpdateUserAddressCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public UpdateUserAddressCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        UpdateUserAddressCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        Address address = Address.Create(
            request.City,
            request.PostIndex,
            request.Street,
            request.House,
            request.Flat
        );

        user.SetAddress(address);

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
