import "./App.css";
import "./index.css";
import BodyContainer from "./Components/BodyContainer";
import TopNavBar from "./Components/TopNavBar";
import { useState, useEffect, useRef } from "react";
import changeBackground from "./Utilities/changeBackground";
import getPosition from "./Utilities/getPosition";
import LoadingScreen from "./Components/LoadingScreen";
import ErrorScreen from "./Components/ErrorScreen";
import abbreviateState from "./Utilities/stateAbbreviations";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Seattle, WA");
  const [loadingMessage, setLoadingMessage] = useState(
    "Finding your location…",
  );
  const lastRequest = useRef(null);

  async function loadWeather(lat, lon, label) {
    lastRequest.current = { lat, lon, label };
    try {
      setIsLoading(true);
      setError(null);
      setAlerts([]);
      setLoadingMessage("Loading weather…");
      const [weatherRes, alertsRes, locationRes] = await Promise.all([
        fetch(`/api/weather?lat=${lat}&lon=${lon}`),
        fetch(`/api/alerts?lat=${lat}&lon=${lon}`),
        fetch(`/api/location?lat=${lat}&lon=${lon}`),
      ]);
      if (!weatherRes.ok) {
        throw new Error(
          "Failed to load weather data" +
            ". " +
            `Weather: ${weatherRes.status} ${weatherRes.statusText}`,
        );
      }

      const weatherData = await weatherRes.json();

      setWeather(weatherData);

      if (alertsRes.ok) {
        const alertsData = await alertsRes.json();
        setAlerts(alertsData);
      }

      if (locationRes.ok && label === "Current Location") {
        const locationData = await locationRes.json();
        label = `${locationData.city}, ${locationData.state}`;
      }
      setLocation(label);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSelectLocation(result) {
    const label = result.state
      ? `${result.name}, ${abbreviateState(result.state)}`
      : result.name;
    loadWeather(result.lat, result.lon, label);
  }

  useEffect(() => {
    async function init() {
      let lat, lon, label;
      try {
        const position = await getPosition();
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        label = "Current Location";
      } catch {
        lat = 47.6;
        lon = -122.3;
        label = "Seattle, WA";
      }
      await loadWeather(lat, lon, label);
    }
    init();
  }, []);

  function handleRetry() {
    loadWeather(
      lastRequest.current.lat,
      lastRequest.current.lon,
      lastRequest.current.label,
    );
  }

  const backgroundClass = weather
    ? changeBackground(weather.current.condition)
    : "theme-default";

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-blue-100 flex flex-col">
      <TopNavBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onSelectLocation={handleSelectLocation}
      />

      <div className={`${backgroundClass} flex-1 min-w-0`}>
        {isLoading ? (
          <LoadingScreen message={loadingMessage} />
        ) : error ? (
          <ErrorScreen message={error.message} onRetry={handleRetry} />
        ) : (
          <BodyContainer
            isSidebarOpen={isSidebarOpen}
            location={location}
            currentWeather={weather.current}
            hourlyForecast={weather.hourly}
            dailyForecast={weather.daily}
            details={weather.details}
            alerts={alerts}
          />
        )}
      </div>
    </div>
  );
}

export default App;
