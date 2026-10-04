namespace WeatherApp.Api.Services;

public static class WeatherCodeMapper
{

    public static string ToCondition(int code) => code switch
    {
        0 => "Clear",
        1 or 2 => "Partly Cloudy",
        3 => "Overcast",
        45 or 48 => "Fog",
        >= 51 and <= 55 => "Drizzle",
        >= 61 and <= 65 => "Rain",
        56 or 57 or 66 or 67 => "Freezing Rain",
        >= 80 and <= 82 => "Showers",
        (>= 71 and <= 77) or 85 or 86 => "Snow",
        >= 95 and <= 99 => "Thunderstorm",
        _ => "Overcast"
    };

}