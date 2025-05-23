using Api.Controllers.Common;
using Application.User.Commands.RefreshAccessToken;
using Domain.DomainErrors;
using Infrastructure.Auth.Authentication;
using Infrastructure.Cookies.Extensions;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SharedKernel.Auth;
using XResults;

namespace Api.Controllers;

[ApiController]
[Route("auth")]
public class AuthInfrastructureController : ApplicationController
{
    private readonly IMediator _mediator;

    public AuthInfrastructureController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("refresh-access-token")]
    public async Task<IActionResult> RefreshAccessToken()
    {
        Request.Cookies.TryGetValue(CookiesInfo.DeviceId.Name, out string? deviceId);
        Request.Cookies.TryGetValue(CookiesInfo.RefreshToken.Name, out string? refreshToken);

        RefreshAccessTokenCommand command = new RefreshAccessTokenCommand(refreshToken, deviceId);
        Result<Tokens, Error> tokensOrError = await _mediator.Send(command);

        if (tokensOrError.IsFailure)
        {
            return Problem(tokensOrError.Error);
        }

        Response.Cookies.Append(tokensOrError.Value);

        return Ok();
    }

    [HttpPost("issue-device-id")]
    public IActionResult IssueDeviceId()
    {
        Request.Cookies.TryGetValue(CookiesInfo.DeviceId.Name, out string? currentDeviceId);
        if (currentDeviceId == null || !Guid.TryParse(currentDeviceId, out _))
        {
            Response.Cookies.Append(
                CookiesInfo.DeviceId.Name,
                Guid.NewGuid().ToString(),
                CookiesInfo.DeviceId.Options
            );
        }

        return Ok();
    }
}
