using Application.Common.FluentValidation;
using FluentValidation;
using Infrastructure.Services;

namespace Application.Categories.Queries.GetCategoryByGender;

public class GetCategoriesByGenderQueryValidator : AbstractValidator<GetCategoriesByGenderQuery>
{
    public GetCategoriesByGenderQueryValidator()
    {
        RuleFor(x => x.Gender).MustBeOk(GenderConverter.Convert);
    }
}
