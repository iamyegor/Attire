using System.Security.Claims;
using Api.Controllers.Common;
using Application.Users.Queries.GetUserAddress;
using Domain.DomainErrors;
using Infrastructure.Authentication;
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

    [HttpGet]
    public async Task<IResult> GetUserAddress()
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var query = new GetUserAddressQuery(userId);

        Result<AddressDto, Error> result = await _sender.Send(query);

        return FromResult(result);
    }
}
