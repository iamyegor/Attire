using Domain.DomainErrors;
using Domain.Product;
using Domain.User;
using Infrastructure.Data;
using MediatR;
using XResults;
using Errors = Domain.Product.Errors.Errors;

namespace Application.Products.Commands.RemoveProductReview;

public record RemoveProductReviewCommand(Guid ProductId, Guid ReviewId, Guid UserId)
    : IRequest<SuccessOr<Error>>;

public class RemoveProductReviewCommandHandler
    : IRequestHandler<RemoveProductReviewCommand, SuccessOr<Error>>
{
    private readonly ApplicationContext _context;

    public RemoveProductReviewCommandHandler(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<SuccessOr<Error>> Handle(
        RemoveProductReviewCommand request,
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

        SuccessOr<Error> removeReviewResult = product.RemoveReview(request.ReviewId, user.Id);

        if (removeReviewResult.IsFailure)
        {
            return removeReviewResult.Error;
        }

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Ok();
    }
}
