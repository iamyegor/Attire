using Application.Common.FluentValidation;
using FluentValidation;
using Infrastructure.Services;

namespace Application.Products.Queries.GetProductsByGender;

public class GetProductsByGenderQueryValidator : AbstractValidator<GetProductsByGenderQuery>
{
    public GetProductsByGenderQueryValidator()
    {
        RuleFor(x => x.Gender).MustBeOk(GenderConverter.Convert);
    }
}
