namespace WeatherApp.Api.Models;

public record Alert(
    string Id,
    string Event,
    string Severity,
    string? Headline,
    string Description,
    string? Instruction,
    DateTimeOffset? Onset,
    DateTimeOffset? Ends
);
