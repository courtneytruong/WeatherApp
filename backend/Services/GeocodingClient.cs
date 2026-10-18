using WeatherApp.Api.Models.OpenMeteo;

namespace WeatherApp.Api.Services;

public class GeocodingClient(HttpClient http)
{
    //gets search info from open meteo API
    public async Task<GeocodingResponse?> SearchAsync(
        string name, CancellationToken ct = default)
    {
        var url = $"v1/search?name={Uri.EscapeDataString(name)}&count=5&countryCode=US";
        return await http.GetFromJsonAsync<GeocodingResponse>(url, ct);
    }
}