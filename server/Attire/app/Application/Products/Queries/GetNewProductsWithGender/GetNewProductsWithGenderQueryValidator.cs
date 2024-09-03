using Application.Common.FluentValidation;
using FluentValidation;
using Infrastructure.Services;

namespace Application.Products.Queries.GetNewProductsWithGender;

public class GetNewProductsWithGenderQueryValidator
    : AbstractValidator<GetNewProductsWithGenderQuery>
{
    public GetNewProductsWithGenderQueryValidator()
    {
        When(
            (x) => x.Gender != null,
            () => RuleFor(x => x.Gender).MustBeOk(x => GenderConverter.Convert(x!))
        );
    }
}
