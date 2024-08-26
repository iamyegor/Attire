using System.Security.Claims;
using Api.Controllers.Common;
using Application.Categories.Queries.GetCategoryByGender;
using Application.Categories.Queries.GetProductFilterFromCategory;
using Application.Categories.Queries.GetProductsFromCategory;
using Contracts.Products;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Route("api/categories")]
public class CategoriesController : ApplicationController
{
    private readonly ISender _sender;

    public CategoriesController(ISender sender)
    {
        _sender = sender;
    }

    [HttpGet("{gender}")]
    public async Task<IResult> GetCategoriesByGender(string gender)
    {
        var query = new GetCategoriesByGenderQuery(gender);

        Result<IEnumerable<CategoryShortDto>, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    // errorCodes: category.with.id.not.found
    [HttpGet("{categoryId:guid}/products")]
    public async Task<IResult> GetProductsFromCategory(
        Guid categoryId,
        string? sorting,
        [AsParameters] FilterParametersDto filterParameters,
        int page = 1
    )
    {
        var query = new GetProductsFromCategoryQuery(
            categoryId,
            User.FindFirstValue(JwtClaims.UserId),
            sorting,
            filterParameters.Adapt<FilterParameters>(),
            page
        );

        Result<GetProductFromCategoryPaginationResultDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    // errorCodes: category.with.id.not.found
    [HttpGet("{categoryId:guid}/products/filter")]
    public async Task<IResult> GetProductFilterFromCategory(Guid categoryId)
    {
        var query = new GetProductFilterFromCategoryQuery(categoryId);

        Result<ProductFilterDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
