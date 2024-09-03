using System.Security.Claims;
using Api.Controllers.Common;
using Application.Users.Commands.CreateOrder;
using Application.Users.Queries.GetOrders;
using Contracts.Users.Orders;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Authorize]
[Route("api/orders")]
public class OrdersController : ApplicationController
{
    private readonly ISender _sender;

    public OrdersController(ISender sender)
    {
        _sender = sender;
    }

    [HttpGet]
    public async Task<IResult> GetOrders(int page = 1)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var query = new GetOrdersQuery(userId, page);

        Result<GetOrdersPaginationResult, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    [HttpPost]
    public async Task<IResult> CreateOrder([FromBody] OrderForCreate orderForCreate)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        CreateOrderCommand command = (userId, orderForCreate).Adapt<CreateOrderCommand>();

        Result<Guid, Error> result = await _sender.Send(command);

        return FromResult(result);
    }
}
