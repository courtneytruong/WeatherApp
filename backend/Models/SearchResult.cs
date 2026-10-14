namespace WeatherApp.Api.Models;

public record SearchResult(
    string Name,
    double Lat,
    double Lon,
    string? State
);