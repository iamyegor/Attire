using Domain.DomainErrors;
using Domain.User;
using Domain.User.ValueObject;
using Infrastructure.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using XResults;
using Errors = Domain.User.Errors.Errors;

namespace Application.Users.Commands.UpdatePersonalData;

public record UpdatePersonalDataCommand(Guid UserId, string FirstName, string Email)
    : IRequest<SuccessOr<Error>>;

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
            return Errors.User.WithIdNotFound(request.UserId);
        }

        Email email = Email.Create(request.Email);

        if (
            await _context.Users.FirstOrDefaultAsync(
                u => u.Email == email && u.Id != user.Id,
                cancellationToken
            ) != null
        )
        {
            return Errors.Email.IsTaken(email.Value);
        }

        user.UpdatePersonalData(request.FirstName, email);

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
