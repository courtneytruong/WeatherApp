using System.Globalization;
using System.Net;
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

        try
        {
            return await http.GetFromJsonAsync<NwsAlertResponse>(url, ct);
        }
        catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.BadRequest)
        {
            return null;
        }
    }

    //gets location information from the NWS API
    public async Task<NwsPointResponse?> GetLocationAsync(
        double lat, double lon, CancellationToken ct = default)
    {
        var url = string.Create(CultureInfo.InvariantCulture,
           $"points/{lat:F4},{lon:F4}");

        try
        {
            return await http.GetFromJsonAsync<NwsPointResponse>(url, ct);
        }
        catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
        {
            return null;
        }
    }
}
