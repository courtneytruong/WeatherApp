using System.Text.Json.Serialization;

namespace WeatherApp.Api.Models.OpenMeteo;

public record OpenMeteoResponse(
    [property: JsonPropertyName("current")] CurrentWeather Current
);

public record CurrentWeather(
    [property: JsonPropertyName("temperature_2m")] double Temperature,
    [property: JsonPropertyName("apparent_temperature")] double ApparentTemperature,
    [property: JsonPropertyName("weather_code")] int WeatherCode
);
