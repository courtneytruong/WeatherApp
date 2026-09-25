using WeatherApp.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// ---- 1. register services (before Build) ----
builder.Services.AddHttpClient<OpenMeteoClient>(c =>
{
    c.BaseAddress = new Uri("https://api.open-meteo.com/");
    c.Timeout = TimeSpan.FromSeconds(10);
});

builder.Services.AddScoped<WeatherService>();


var app = builder.Build();

// ---- 2. map endpoints (after Build) ----
app.MapGet("/api/weather", async (double lat, double lon, WeatherService weather, CancellationToken ct) =>
    await weather.GetWeatherAsync(lat, lon, ct));

app.Run();
