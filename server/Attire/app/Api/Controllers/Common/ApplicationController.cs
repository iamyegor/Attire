using System.Net;
using Domain.DomainErrors;
using Microsoft.AspNetCore.Mvc;
using XResults;

namespace Api.Controllers.Common;

public class ApplicationController : ControllerBase
{
    protected IResult Problem(Error error)
    {
        return new ErrorResult(error);
    }

    protected IResult FromResult(SuccessOr<Error> result)
    {
        return result.IsSuccess ? Results.Ok() : Problem(result.Error);
    }

    protected IResult FromResult<TValue>(Result<TValue, Error> result)
    {
        if (result.IsFailure)
        {
            return Problem(result.Error);
        }

        return Results.Ok(result.Value);
    }
}
