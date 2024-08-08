using Domain.DomainErrors;
using Domain.Product;
using Domain.Product.Entities;
using Domain.User;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.Product.Errors.Errors;

namespace Application.Products.Commands.CreateProductReview;

public enum ShelfLifeWithCommand
{
    LessThanWeek = 1,
    LessThanMonth = 2,
    LessThanYear = 3
}

public record CreateProductReviewCommand(
    Guid ProductId,
    Guid UserId,
    ShelfLifeWithCommand ShelfLife,
    bool SizeMatches,
    string Content,
    string Advantages,
    string Disadvantages,
    int Stars
) : IRequest<Result<Guid, Error>>;

public class CreateProductReviewCommandHandler
    : IRequestHandler<CreateProductReviewCommand, Result<Guid, Error>>
{
    private readonly ApplicationContext _context;

    public CreateProductReviewCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<Result<Guid, Error>> Handle(
        CreateProductReviewCommand request,
        CancellationToken cancellationToken
    )
    {
        Product? product = await _context.Products.FindAsync(
            [request.ProductId],
            cancellationToken
        );

        if (product == null)
        {
            return Errors.Product.WithIdNotFound(request.ProductId);
        }

        User? user = await _context.Users.FindAsync([request.UserId], cancellationToken);

        if (user == null)
        {
            return Domain.User.Errors.Errors.User.WithIdNofFound(request.UserId);
        }

        Review createdReview = Review.Create(
            user.Id,
            (int)request.ShelfLife,
            request.SizeMatches,
            request.Content,
            request.Advantages,
            request.Disadvantages,
            request.Stars
        );

        SuccessOr<Error> addReviewResult = product.AddReview(createdReview);

        if (addReviewResult.IsFailure)
        {
            return addReviewResult.Error;
        }

        await _context.SaveChangesAsync(cancellationToken);

        return createdReview.Id;
    }
}
