using System.Security.Claims;
using Api.Controllers.Common;
using Application.Users.Commands.AddFavoriteProduct;
using Application.Users.Commands.RemoveFavoriteProduct;
using Application.Users.Queries.GetFavoriteProducts;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Authorize]
[Route("api/users/favoriteProducts")]
public class UserFavoriteProductsController : ApplicationController
{
    private readonly ISender _sender;

    public UserFavoriteProductsController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPost]
    public async Task<IResult> AddFavoriteProduct(Guid favoriteProductId)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var command = new AddFavoriteProductCommand(userId, favoriteProductId);

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }

    [HttpDelete]
    public async Task<IResult> RemoveFavoriteProduct(Guid removedFavoriteProductId)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var command = new RemoveFavoriteProductCommand(userId, removedFavoriteProductId);

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }

    [HttpGet]
    public async Task<IResult> GetFavoriteProducts(int page = 1)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);

        var query = new GetFavoriteProductsQuery(userId, page);

        Result<GetFavoriteProductsPaginationResult, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
