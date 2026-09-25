using System.Globalization;
using WeatherApp.Api.Models.OpenMeteo;

namespace WeatherApp.Api.Services;

public class OpenMeteoClient(HttpClient http)
{
    //gets forecast info from open meteo API
    public async Task<OpenMeteoResponse?> GetForecastAsync(
        double lat, double lon, CancellationToken ct = default)
    {
        var url = string.Create(CultureInfo.InvariantCulture,
            $"v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,apparent_temperature,weather_code&hourly=temperature_2m,apparent_temperature,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_hours=24&forecast_days=10&temperature_unit=fahrenheit&timezone=auto&wind_speed_unit=mph&precipitation_unit=inch");

        return await http.GetFromJsonAsync<OpenMeteoResponse>(url, ct);
    }
}