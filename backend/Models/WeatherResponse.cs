
namespace WeatherApp.Api.Models;

public record CurrentConditions(int Temp, int FeelsLike, int High, int Low, string Condition);
public record HourlyForecast(DateTime Time, int Temp, int FeelsLike, string Condition, int? PrecipitationChance);
public record DailyForecast(DateOnly Date, int High, int Low, string Condition);

public record WeatherDetails(int Humidity, double PrecipitationToday, int? PrecipitationChance, int UVIndex, int Visibility, int DewPoint, DateTime Sunrise, DateTime Sunset, DateTime? SunProtectionUntil, DateTime? SunProtectionFrom);
public record WeatherResponse(CurrentConditions Current, WeatherDetails Details, List<HourlyForecast> Hourly, List<DailyForecast> Daily);
