using WeatherApp.Api.Models;

namespace WeatherApp.Api.Services;

public class AlertService(NwsClient nws)
{
    public async Task<List<Alert>> GetActiveAlertsAsync(double lat, double lon, CancellationToken ct = default)
    {
        var response = await nws.GetActiveAlertsAsync(lat, lon, ct);
        return response?.Features
            .Select(f => new Alert(
                f.Properties.Id,
                f.Properties.Event,
                f.Properties.Severity,
                f.Properties.Headline,
                f.Properties.Description,
                f.Properties.Instruction,
                f.Properties.Onset,
                f.Properties.Ends
            ))
            .ToList() ?? [];

    }
}