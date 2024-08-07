using System.Security.Claims;
using Api.Controllers.Common;
using Application.Categories.Queries.Common;
using Application.Categories.Queries.GetFemaleCategories;
using Application.Categories.Queries.GetMaleCategories;
using Application.Categories.Queries.GetProductsFromCategory;
using Application.Common.Models;
using Infrastructure.Authentication;
using MediatR;
using Microsoft.AspNetCore.Mvc;

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
    public async Task<IEnumerable<ProductShortDto>> GetProductsFromCategory(Guid categoryId)
    {
        var query = new GetProductsFromCategoryQuery(categoryId, User.FindFirstValue(JwtClaims.UserId));

        IEnumerable<ProductShortDto> result = await _sender.Send(query);

        return result;
    }
}
