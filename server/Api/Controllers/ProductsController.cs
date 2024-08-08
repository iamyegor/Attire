using System.Security.Claims;
using Api.Controllers.Common;
using Application.Products.Queries.GetProductDetails;
using Application.Products.Queries.GetProductStatistics;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Route("api/products")]
public class ProductsController : ApplicationController
{
    private readonly ISender _sender;

    public ProductsController(ISender sender)
    {
        _sender = sender;
    }

    // errorCodes: product.with.id.not.found
    [HttpGet("{productId:guid}")]
    public async Task<IResult> GetProductDetails(Guid productId)
    {
        var query = new GetProductDetailsQuery(productId, User.FindFirstValue(JwtClaims.UserId));

        Result<ProductDetailsDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpGet("{productId:guid}/statistics")]
    public async Task<IResult> GetProductStatistics(Guid productId)
    {
        var query = new GetProductStatisticsQuery(productId);

        Result<ProductStatisticsDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
