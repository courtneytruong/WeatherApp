namespace WeatherApp.Api.Models.OpenMeteo;

public record GeocodingResponse(List<GeocodingResult>? Results);

public record GeocodingResult(
    string Name,
    double Latitude,
    double Longitude,
    string? Admin1);