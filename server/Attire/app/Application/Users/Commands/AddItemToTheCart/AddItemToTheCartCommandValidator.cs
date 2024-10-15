using Application.Common.FluentValidation;
using Domain.Product.ValueObject;
using Domain.User.Entities;
using FluentValidation;

namespace Application.Users.Commands.AddItemToTheCart;

public class AddItemToTheCartCommandValidator : AbstractValidator<AddItemToTheCartCommand>
{
    public AddItemToTheCartCommandValidator()
    {
        RuleFor(x => x.Size).MustBeOk(Size.Create);
        RuleFor(x => x.Color).MustBeOk(x => Color.Create("#000", x, x));
        RuleFor(x => x)
            .MustBeOk(x =>
                CartItem.Create(
                    x.ProductId,
                    x.Quantity,
                    Size.Create(x.Size),
                    Color.Create("#000", x.Color, x.Color)
                )
            );
    }
}
