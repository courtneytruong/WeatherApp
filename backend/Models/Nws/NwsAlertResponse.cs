namespace WeatherApp.Api.Models.Nws;

public record NwsAlertResponse(List<NwsFeature> Features);

public record NwsFeature(NwsAlertProperties Properties);

public record NwsAlertProperties(
    string Id,
    string Event,
    string Severity,
    string? Headline,
    string Description,
    string? Instruction,
    DateTimeOffset? Onset,
    DateTimeOffset? Ends);
