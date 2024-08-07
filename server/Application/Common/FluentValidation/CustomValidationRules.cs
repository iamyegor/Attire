using Domain.DomainErrors;
using FluentValidation;
using XResults;

namespace Application.Common.FluentValidation;

public static class CustomValidationRules
{
    public static IRuleBuilderOptions<T, TElement> MustBeOk<T, TElement, TValue>(this IRuleBuilder<T, TElement> ruleBuilder,
        Func<TElement, Result<TValue, Error>> factoryMethod)
    {
        return (IRuleBuilderOptions<T, TElement>)ruleBuilder.Custom(
            (value, context) =>
            {
                 Result<TValue, Error> result = factoryMethod(value);

                 if (result.IsFailure)
                 {
                     context.AddFailure(result.Error.Serialize());
                 }
            });
    }
}
