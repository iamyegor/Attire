using Application.Common.FluentValidation;
using Domain.Product.Entities;
using FluentValidation;

namespace Application.Products.Commands.CreateProductReview;

public class CreateProductReviewCommandValidator : AbstractValidator<CreateProductReviewCommand>
{
    public CreateProductReviewCommandValidator()
    {
        RuleFor(x => x)
            .MustBeOk(x =>
                Review.Create(
                    x.UserId,
                    (int)x.ShelfLife,
                    x.SizeMatches,
                    x.Content,
                    x.Advantages,
                    x.Disadvantages,
                    x.Stars
                )
            );
    }
}
