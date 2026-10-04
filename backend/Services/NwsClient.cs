using System.Globalization;
using WeatherApp.Api.Models.Nws;

namespace WeatherApp.Api.Services;

public class NwsClient(HttpClient http)
{
    //gets active alerts from the NWS API
    public async Task<NwsAlertResponse?> GetActiveAlertsAsync(
        double lat, double lon, CancellationToken ct = default)
    {
        var url = string.Create(CultureInfo.InvariantCulture,
           $"alerts/active?point={lat},{lon}");

        return await http.GetFromJsonAsync<NwsAlertResponse>(url, ct);
    }
}
