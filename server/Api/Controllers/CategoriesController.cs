using System.Security.Claims;
using Api.Controllers.Common;
using Application.Categories.Queries.Common;
using Application.Categories.Queries.GetFemaleCategories;
using Application.Categories.Queries.GetMaleCategories;
using Application.Categories.Queries.GetProductFilterFromCategory;
using Application.Categories.Queries.GetProductsFromCategory;
using Application.Common.Models;
using Contracts.Products;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using XResults;
using FilterParameters = Contracts.Products.FilterParameters;
using SortParameters = Contracts.Products.SortParameters;

namespace Api.Controllers;

[Route("api/categories")]
public class CategoriesController : ApplicationController
{
    private readonly ISender _sender;

    public CategoriesController(ISender sender)
    {
        _sender = sender;
    }

    [HttpGet("female")]
    public async Task<IEnumerable<CategoryShortDto>> GetFemaleCategories()
    {
        var query = new GetFemaleCategoriesQuery();

        IEnumerable<CategoryShortDto> result = await _sender.Send(query);

        return result;
    }

    [HttpGet("male")]
    public async Task<IEnumerable<CategoryShortDto>> GetMaleCategories()
    {
        var query = new GetMaleCategoriesQuery();

        IEnumerable<CategoryShortDto> result = await _sender.Send(query);

        return result;
    }

    [HttpGet("{categoryId:guid}/products")]
    public async Task<IResult> GetProductsFromCategory(
        Guid categoryId,
        [AsParameters] SortParameters sortParameters,
        [AsParameters] FilterParameters filterParameters
    )
    {
        var query = new GetProductsFromCategoryQuery(
            categoryId,
            User.FindFirstValue(JwtClaims.UserId),
            sortParameters.Adapt<Application.Categories.Queries.GetProductsFromCategory.SortParameters>(),
            filterParameters.Adapt<Application.Categories.Queries.GetProductsFromCategory.FilterParameters>()
        );

        Result<IEnumerable<ProductShortDto>, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpGet("{categoryId:guid}/products/filter")]
    public async Task<IResult> GetProductFilterFromCategory(Guid categoryId)
    {
        var query = new GetProductFilterFromCategoryQuery(categoryId);

        Result<ProductFilterDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
