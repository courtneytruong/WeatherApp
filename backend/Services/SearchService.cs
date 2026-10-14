using WeatherApp.Api.Models;

namespace WeatherApp.Api.Services;

public class SearchService(GeocodingClient geocoding)
{
    public async Task<List<SearchResult>> SearchAsync(string name, CancellationToken ct = default)
    {
        var response = await geocoding.SearchAsync(name, ct);
        return response?.Results?
            .Select(r => new SearchResult(
                r.Name,
                r.Latitude,
                r.Longitude,
                r.Admin1
            ))
            .ToList() ?? [];
    }
}
