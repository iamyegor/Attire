using System.Security.Claims;
using Api.Controllers.Common;
using Application.Products.Queries.FindProducts;
using Application.Products.Queries.GetNewProductsWithGender;
using Application.Products.Queries.GetProductDetails;
using Application.Products.Queries.GetProductsByGender;
using Application.Products.Queries.GetProductStatistics;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using XResults;
using SortParameters = Application.Categories.Queries.GetProductsFromCategory.SortParameters;

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
        // string userId = "b0b95618-3427-4183-8f2f-3eb7ecd8fda2";
        string? userId = User.FindFirstValue(JwtClaims.UserId);
        var query = new GetProductDetailsQuery(productId, userId);

        Result<ProductDetailsDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    // errorCodes: product.with.id.not.found
    [HttpGet("{productId:guid}/statistics")]
    public async Task<IResult> GetProductStatistics(Guid productId)
    {
        var query = new GetProductStatisticsQuery(productId);

        Result<ProductStatisticsDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpGet]
    public async Task<FindProductsPaginationResult> FindProducts(string searchTerm, int page = 1)
    {
        var query = new FindProductsQuery(searchTerm, page, User.FindFirstValue(JwtClaims.UserId));

        FindProductsPaginationResult result = await _sender.Send(query);

        return result;
    }

    [HttpGet("new")]
    public async Task<IResult> GetNewProductsWithGender(
        string? gender,
        [AsParameters] SortParameters sortParameters,
        int page = 1
    )
    {
        var query = new GetNewProductsWithGenderQuery(
            gender,
            sortParameters.Adapt<Application.Products.Queries.GetNewProductsWithGender.SortParameters>(),
            page,
            User.FindFirstValue(JwtClaims.UserId)
        );

        Result<GetNewProductsWithGenderPaginationResult, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpGet("genders/{gender}")]
    public async Task<IResult> GetProductsByGender(
        string gender,
        [AsParameters] SortParameters sortParameters,
        int page = 1
    )
    {
        var query = new GetProductsByGenderQuery(
            gender,
            sortParameters.Adapt<Application.Products.Queries.GetProductsByGender.SortParameters>(),
            page,
            User.FindFirstValue(JwtClaims.UserId)
        );

        Result<GetProductsByGenderPaginationResult, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
