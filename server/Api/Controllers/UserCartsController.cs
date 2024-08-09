using System.Security.Claims;
using Api.Controllers.Common;
using Application.Users.Commands.AddItemToTheCart;
using Application.Users.Commands.ChangeQuantityOfProductsInCartItem;
using Application.Users.Commands.RemoveCartItem;
using Application.Users.Queries.GetCartItems;
using Contracts.Users.Carts;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Authorize]
[Route("api/users/carts")]
public class UserCartsController : ApplicationController
{
    private readonly ISender _sender;

    public UserCartsController(ISender sender)
    {
        _sender = sender;
    }

    // errorCodes:
    // product.with.id.not.found
    // user.with.id.not.found
    // product.color.not.found
    // product.size.with.value.not.found
    // cart.item.with.parameters.already.exists
    [HttpPost]
    public async Task<IResult> AddCartItem(CartItemForCreate cartItemForCreate)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        AddItemToTheCartCommand command = (
            userId,
            cartItemForCreate
        ).Adapt<AddItemToTheCartCommand>();

        Result<Guid, Error> result = await _sender.Send(command);

        return FromResult(result);
    }

    [HttpGet]
    public async Task<GetCartItemsPaginationResult> GetCartItems(int page = 1)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var query = new GetCartItemsQuery(userId, page);

        GetCartItemsPaginationResult result = await _sender.Send(query);

        return result;
    }

    // errorCodes
    // user.with.id.not.found
    // user.cart.item.with.id.not.found
    // card.item.quantity.must.be.greater.than.zero
    [HttpPut("{cartItemId:guid}/quantity")]
    public async Task<IResult> ChangeQuantityOfProductsInCartItem(
        Guid cartItemId,
        [FromBody] ChangeQuantityOfProductInCartItemDto changeQuantityOfProductInCartItemDto
    )
    {
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var command = new ChangeQuantityOfProductsInCartItemCommand(
            userId,
            cartItemId,
            changeQuantityOfProductInCartItemDto.Quantity
        );

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }

    // errorCodes
    // user.with.id.not.found
    // user.cart.item.with.id.not.found
    [HttpDelete("{cartItemId:guid}")]
    public async Task<IResult> RemoveCartItem(Guid cartItemId)
    {
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var command = new RemoveCartItemCommand(userId, cartItemId);

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }
}
