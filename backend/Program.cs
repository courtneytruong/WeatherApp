using WeatherApp.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// ---- 1. register services (before Build) ----
builder.Services.AddHttpClient<OpenMeteoClient>(c =>
{
    c.BaseAddress = new Uri("https://api.open-meteo.com/");
    c.Timeout = TimeSpan.FromSeconds(10);
});

builder.Services.AddHttpClient<NwsClient>(c =>
{
    c.BaseAddress = new Uri("https://api.weather.gov/");
    c.Timeout = TimeSpan.FromSeconds(10);
    c.DefaultRequestHeaders.UserAgent.ParseAdd("(WeatherApp, https://github.com/courtneytruong/WeatherApp)");
    c.DefaultRequestHeaders.Accept.ParseAdd("application/geo+json");
});


builder.Services.AddScoped<WeatherService>();

builder.Services.AddScoped<AlertService>();


var app = builder.Build();

// ---- 2. map endpoints (after Build) ----
app.MapGet("/api/weather", async (double lat, double lon, WeatherService weather, CancellationToken ct) =>
    await weather.GetWeatherAsync(lat, lon, ct));

app.MapGet("/api/alerts", async (double lat, double lon, AlertService alerts, CancellationToken ct) =>
    await alerts.GetActiveAlertsAsync(lat, lon, ct));

app.Run();
