﻿using System.Security.Claims;
using Api.Controllers.Common;
using Application.Common.Models;
using Application.Products.Queries.FindProducts;
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

    // errorCodes: product.with.id.not.found
    [HttpGet("{productId:guid}/statistics")]
    public async Task<IResult> GetProductStatistics(Guid productId)
    {
        var query = new GetProductStatisticsQuery(productId);

        Result<ProductStatisticsDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpGet]
    public async Task<FindProductsPaginationResult> FindProducts(string searchText, int page = 1)
    {
        var query = new FindProductsQuery(searchText, page, User.FindFirstValue(JwtClaims.UserId));

        FindProductsPaginationResult result = await _sender.Send(query);

        return result;
    }
}
