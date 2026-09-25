
namespace WeatherApp.Api.Models;

public record CurrentConditions(int Temp, int FeelsLike, int High, int Low, string Condition);
public record HourlyForecast(DateTime Time, int Temp, int FeelsLike, string Condition);
public record DailyForecast(DateOnly Date, int High, int Low, string Condition);
public record WeatherResponse(CurrentConditions Current, List<HourlyForecast> Hourly, List<DailyForecast> Daily);
