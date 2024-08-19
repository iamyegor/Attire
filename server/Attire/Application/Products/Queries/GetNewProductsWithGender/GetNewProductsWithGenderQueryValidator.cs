using Application.Common.FluentValidation;
using FluentValidation;
using Infrastructure.Services;

namespace Application.Products.Queries.GetNewProductsWithGender;

public class GetNewProductsWithGenderQueryValidator
    : AbstractValidator<GetNewProductsWithGenderQuery>
{
    public GetNewProductsWithGenderQueryValidator()
    {
        RuleFor(x => x.Gender).MustBeOk(GenderConverter.Convert);
    }
}
