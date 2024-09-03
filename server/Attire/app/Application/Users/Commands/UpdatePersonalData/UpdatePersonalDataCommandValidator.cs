using Application.Common.FluentValidation;
using Domain.User;
using Domain.User.ValueObject;
using FluentValidation;

namespace Application.Users.Commands.UpdatePersonalData;

public class UpdatePersonalDataCommandValidator : AbstractValidator<UpdatePersonalDataCommand>
{
    public UpdatePersonalDataCommandValidator()
    {
        RuleFor(x => x.Email).MustBeOk(Email.Create);
        RuleFor(x => x).MustBeOk(x => User.Create(x.FirstName, Email.Create(x.Email)));
    }
}
