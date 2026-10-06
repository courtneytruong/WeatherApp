using System.Text.Json;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace WeatherApp.Api.Infrastructure;

public class UpstreamExceptionHandler(
    IProblemDetailsService problemDetails,
    ILogger<UpstreamExceptionHandler> logger) : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        // Client disconnected — not an error, nothing to send back
        if (exception is OperationCanceledException && httpContext.RequestAborted.IsCancellationRequested)
        {
            return true;
        }

        // Only handle upstream failures; anything else is "not mine"
        if (exception is not (HttpRequestException or JsonException or OperationCanceledException))
        {
            return false;
        }

        var isTimeout = exception is OperationCanceledException;
        var status = isTimeout ? StatusCodes.Status504GatewayTimeout : StatusCodes.Status502BadGateway;
        var title = isTimeout ? "Weather service timed out" : "Weather service unavailable";

        logger.LogWarning(exception, "Upstream weather API call failed");

        httpContext.Response.StatusCode = status;

        return await problemDetails.TryWriteAsync(new ProblemDetailsContext
        {
            HttpContext = httpContext,
            Exception = exception,
            ProblemDetails = new ProblemDetails
            {
                Status = status,
                Title = title,
            },
        });
    }
}
