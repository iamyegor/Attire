using System.Security.Claims;
using Api.Controllers.Common;
using Application.Products.Commands.CreateProductReview;
using Application.Products.Commands.RemoveProductReview;
using Application.Products.Queries.GetProductReviews;
using Contracts.Products.Reviews;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Route("api/products/{productId:guid}/reviews")]
public class ProductReviewsController : ApplicationController
{
    private readonly ISender _sender;

    public ProductReviewsController(ISender sender)
    {
        _sender = sender;
    }

    // product.with.id.not.found
    [HttpGet]
    public async Task<IResult> GetProductReviews(Guid productId, int page = 1)
    {
        var query = new GetProductReviewsQuery(productId, page);

        Result<GetProductReviewsPaginationResultDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    // errorCodes:
    // product.review.from.this.user.already.exists
    // product.review.from.this.user.already.exists
    // user.with.id.not.found
    [Authorize]
    [HttpPost]
    public async Task<IResult> CreateProductReview(
        Guid productId,
        [FromBody] ReviewForCreate reviewForCreate
    )
    {
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        CreateProductReviewCommand command = (
            productId,
            userId,
            reviewForCreate
        ).Adapt<CreateProductReviewCommand>();

        Result<Guid, Error> result = await _sender.Send(command);

        return FromResult(result);
    }

    // errorCodes:
    // product.with.id.not.found
    // user.with.id.not.found
    // review.with.id.not.found
    // review.does.not.belong.to.this.user
    [Authorize]
    [HttpDelete("{reviewId:guid}")]
    public async Task<IResult> RemoveProductReview(Guid productId, Guid reviewId)
    {
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var command = new RemoveProductReviewCommand(productId, reviewId, userId);

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }
}
