using System.Text.Json.Serialization;

namespace WeatherApp.Api.Models.OpenMeteo;

public record OpenMeteoResponse(
    [property: JsonPropertyName("current")] CurrentWeather Current,
    [property: JsonPropertyName("hourly")] HourlyWeather Hourly,
    [property: JsonPropertyName("daily")] DailyWeather Daily
);

public record CurrentWeather(
    [property: JsonPropertyName("temperature_2m")] double Temperature,
    [property: JsonPropertyName("apparent_temperature")] double ApparentTemperature,
    [property: JsonPropertyName("weather_code")] int WeatherCode,
    [property: JsonPropertyName("relative_humidity_2m")] int RelativeHumidity,
    [property: JsonPropertyName("dew_point_2m")] double DewPoint,
    [property: JsonPropertyName("uv_index")] double UVIndex,
    [property: JsonPropertyName("visibility")] double Visibility
);

public record HourlyWeather(
    [property: JsonPropertyName("time")] List<DateTime> Time,
    [property: JsonPropertyName("temperature_2m")] List<double> Temperature,
    [property: JsonPropertyName("apparent_temperature")] List<double> ApparentTemperature,
    [property: JsonPropertyName("weather_code")] List<int> WeatherCode
);

public record DailyWeather(
    [property: JsonPropertyName("time")] List<DateOnly> Time,
    [property: JsonPropertyName("temperature_2m_max")] List<double> HighTemp,
    [property: JsonPropertyName("temperature_2m_min")] List<double> LowTemp,
    [property: JsonPropertyName("weather_code")] List<int> WeatherCode,
    [property: JsonPropertyName("precipitation_sum")] List<double> PrecipitationSum,
    [property: JsonPropertyName("sunrise")] List<DateTime> Sunrise,
    [property: JsonPropertyName("sunset")] List<DateTime> Sunset
);