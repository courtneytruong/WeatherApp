using WeatherApp.Api.Models;

namespace WeatherApp.Api.Services;

public class LocationService(NwsClient nws)
{
    public async Task<Location?> GetLocationAsync(double lat, double lon, CancellationToken ct = default)
    {
        var response = await nws.GetLocationAsync(lat, lon, ct);
        var props = response?.Properties.RelativeLocation.Properties;
        return props is null ? null : new Location(props.City, props.State);

    }
}
