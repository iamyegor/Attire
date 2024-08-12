using System.Security.Claims;
using Api.Controllers.Common;
using Application.Users.Commands.UpdatePersonalData;
using Application.Users.Queries.GetPersonalData;
using Contracts.Users.PersonalData;
using Domain.DomainErrors;
using Infrastructure.Authentication;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers;

[Authorize]
[Route("api/users/personalData")]
public class UserPersonalDataController : ApplicationController
{
    private readonly ISender _sender;

    public UserPersonalDataController(ISender sender)
    {
        _sender = sender;
    }

    // errorCodes:
    // user.with.id.not.found
    [HttpGet]
    public async Task<IResult> GetUserPersonalData()
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        var command = new GetPersonalDataQuery(userId);

        Result<PersonalDataDto, Error> result = await _sender.Send(command);

        return FromResult(result);
    }

    // errorCodes:
    // user.with.id.not.found
    [HttpPut]
    public async Task<IResult> UpdateUserPersonalData(
        [FromBody] UserPersonalDataForUpdate userPersonalDataForUpdate
    )
    {
        // Guid userId = Guid.Parse("b0b95618-3427-4183-8f2f-3eb7ecd8fda2");
        Guid userId = Guid.Parse(User.FindFirstValue(JwtClaims.UserId)!);
        UpdatePersonalDataCommand command = (
            userId,
            userPersonalDataForUpdate
        ).Adapt<UpdatePersonalDataCommand>();

        SuccessOr<Error> result = await _sender.Send(command);

        return FromResult(result);
    }
}
