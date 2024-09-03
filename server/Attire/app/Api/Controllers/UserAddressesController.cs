using System.Security.Claims;
using Api.Controllers.Common;
using Application.Users.Commands.UpdateUserAddress;
using Application.Users.Queries.GetUserAddress;
using Contracts.Users.Addresses;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Authorize]
[Route("api/users/address")]
public class UserAddressesController : ApplicationController
{
    private readonly ISender _sender;

    public UserAddressesController(ISender sender)
    {
        _sender = sender;
    }

    // statusCodes:
    // user.with.id.not.found
    [HttpGet]
    public async Task<IResult> GetUserAddress()
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var query = new GetUserAddressQuery(userId);

        Result<AddressDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }

    // statusCodes:
    // user.with.id.not.found
    [HttpPut]
    public async Task<IResult> UpdateUserAddress([FromBody] AddressForUpdate addressForUpdate)
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        UpdateUserAddressCommand command = (
            userId,
            addressForUpdate
        ).Adapt<UpdateUserAddressCommand>();

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }
}
