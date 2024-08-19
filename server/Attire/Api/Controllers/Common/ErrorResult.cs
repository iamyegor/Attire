using Domain.DomainErrors;

namespace Api.Controllers.Common;

public class ErrorResult : IResult
{
    private readonly Error _error;

    public ErrorResult(Error error)
    {
        _error = error;
    }

    public async Task ExecuteAsync(HttpContext httpContext)
    {
        var payload = new Dictionary<string, object?>()
        {
            ["errorCode"] = _error.Code,
            ["errorMessage"] = _error.Message
        };

        foreach ((string key, object? value) in _error.Details)
        {
            payload.Add(key, value);
        }

        httpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
        httpContext.Response.ContentType = "application/vnd.problem+json";

        await httpContext.Response.WriteAsJsonAsync(payload);
    }
}
