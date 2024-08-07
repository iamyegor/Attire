﻿using Api.Controllers.Common;
using Application.Categories.Queries.Common;
using Application.Categories.Queries.GetFemaleCategories;
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
}
