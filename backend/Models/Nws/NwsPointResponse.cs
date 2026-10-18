namespace WeatherApp.Api.Models.Nws;

public record NwsPointResponse(NwsPointProperties Properties);

public record NwsPointProperties(NwsRelativeLocation RelativeLocation);

public record NwsRelativeLocation(NwsRelativeLocationProperties Properties);

public record NwsRelativeLocationProperties(string City, string State);
