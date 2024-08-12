using Domain.DomainErrors;
using Domain.User;
using Domain.User.ValueObject;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.UpdatePersonalData;

public record UpdatePersonalDataCommand(
    Guid UserId,
    string FirstName,
    string LastName,
    string Phone,
    string Email
) : IRequest<SuccessOr<Error>>;

public class UpdatePersonalDataCommandHandler
    : IRequestHandler<UpdatePersonalDataCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public UpdatePersonalDataCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        UpdatePersonalDataCommand request,
        CancellationToken cancellationToken
    )
    {
        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Errors.User.WithIdNofFound(request.UserId);
        }

        PhoneNumber phone = PhoneNumber.Create(request.Phone);
        Email email = Email.Create(request.Email);

        user.UpdatePersonalData(request.FirstName, request.LastName, phone, email);

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
