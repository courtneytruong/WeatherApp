using System.Globalization;
using WeatherApp.Api.Models.OpenMeteo;

namespace WeatherApp.Api.Services;

public class OpenMeteoClient(HttpClient http)
{
    public async Task<OpenMeteoResponse?> GetCurrentForecastAsync(
        double lat, double lon, CancellationToken ct = default)
    {
        var url = string.Create(CultureInfo.InvariantCulture,
            $"v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,apparent_temperature,weather_code&temperature_unit=fahrenheit&timezone=auto&wind_speed_unit=mph&precipitation_unit=inch");

        return await http.GetFromJsonAsync<OpenMeteoResponse>(url, ct);
    }
}