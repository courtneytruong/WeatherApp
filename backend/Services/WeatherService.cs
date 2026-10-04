using WeatherApp.Api.Models;

namespace WeatherApp.Api.Services;

public class WeatherService(OpenMeteoClient openMeteo)
{
    public async Task<WeatherResponse?> GetWeatherAsync(double lat, double lon, CancellationToken ct = default)
    {
        var forecast = await openMeteo.GetForecastAsync(lat, lon, ct);

        if (forecast is null) return null;

        var hourly = Enumerable.Range(0, forecast.Hourly.Time.Count)
            .Select(i => new HourlyForecast(
            forecast.Hourly.Time[i],
            Round(forecast.Hourly.Temperature[i]),
            Round(forecast.Hourly.ApparentTemperature[i]),
            WeatherCodeMapper.ToCondition(forecast.Hourly.WeatherCode[i]))).ToList();

        var daily = Enumerable.Range(0, forecast.Daily.Time.Count)
            .Select(i => new DailyForecast(
            forecast.Daily.Time[i],
            Round(forecast.Daily.HighTemp[i]),
            Round(forecast.Daily.LowTemp[i]),
            WeatherCodeMapper.ToCondition(forecast.Daily.WeatherCode[i]))).ToList();

        var current = new CurrentConditions(
            Round(forecast.Current.Temperature),
            Round(forecast.Current.ApparentTemperature),
            Round(forecast.Daily.HighTemp[0]),
            Round(forecast.Daily.LowTemp[0]),
            WeatherCodeMapper.ToCondition(forecast.Current.WeatherCode)
        );
        return new WeatherResponse(current, hourly, daily);
    }
    private static int Round(double value) => (int)Math.Round(value, MidpointRounding.AwayFromZero);

}
