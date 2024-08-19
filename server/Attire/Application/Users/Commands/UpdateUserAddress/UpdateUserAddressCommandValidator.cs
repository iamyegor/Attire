using Application.Common.FluentValidation;
using Domain.User.ValueObject;
using FluentValidation;

namespace Application.Users.Commands.UpdateUserAddress;

public class UpdateUserAddressCommandValidator : AbstractValidator<UpdateUserAddressCommand>
{
    public UpdateUserAddressCommandValidator()
    {
        RuleFor(x => x)
            .MustBeOk(x => Address.Create(x.City, x.PostIndex, x.Street, x.House, x.Flat));
    }
}
