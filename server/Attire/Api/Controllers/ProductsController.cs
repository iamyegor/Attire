using System.Security.Claims;
using Api.Controllers.Common;
using Application.Products.Queries.FindProducts;
using Application.Products.Queries.GetNewProductsWithGender;
using Application.Products.Queries.GetProductDetails;
using Application.Products.Queries.GetProductsByGender;
using Application.Products.Queries.GetProductStatistics;
using Contracts.Products;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using XResults;
using SortParameters = Application.Products.Queries.GetNewProductsWithGender.SortParameters;

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
        [AsParameters] SortParametersDto sortingDto,
        int page = 1
    )
    {
        SortParameters sortParameters;
        if (sortingDto.Sorting == "new")
        {
            sortParameters = new SortParameters(null, "creationDate");
        }
        else if (sortingDto.Sorting == "more_expensive")
        {
            sortParameters = new SortParameters(null, "price");
        }
        else if (sortingDto.Sorting == "cheaper")
        {
            sortParameters = new SortParameters("price", null);
        }
        else
        {
            sortParameters = new SortParameters(sortingDto.Sorting, null);
        }

        var query = new GetNewProductsWithGenderQuery(
            gender,
            sortParameters,
            page,
            User.FindFirstValue(JwtClaims.UserId)
        );

        Result<GetNewProductsWithGenderPaginationResult, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpGet("genders/{gender}")]
    public async Task<IResult> GetProductsByGender(
        string gender,
        [AsParameters] SortParametersDto sortingDto,
        int page = 1
    )
    {
        Application.Products.Queries.GetProductsByGender.SortParameters sortParameters;
        if (sortingDto.Sorting == "new")
        {
            sortParameters = new Application.Products.Queries.GetProductsByGender.SortParameters(
                null,
                "creationDate"
            );
        }
        else if (sortingDto.Sorting == "more_expensive")
        {
            sortParameters = new Application.Products.Queries.GetProductsByGender.SortParameters(
                null,
                "price"
            );
        }
        else if (sortingDto.Sorting == "cheaper")
        {
            sortParameters = new Application.Products.Queries.GetProductsByGender.SortParameters(
                "price",
                null
            );
        }
        else
        {
            sortParameters = new Application.Products.Queries.GetProductsByGender.SortParameters(
                sortingDto.Sorting,
                null
            );
        }

        var query = new GetProductsByGenderQuery(
            gender,
            sortParameters,
            page,
            User.FindFirstValue(JwtClaims.UserId)
        );

        Result<GetProductsByGenderPaginationResult, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
