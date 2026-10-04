import "./App.css";
import "./index.css";
import BodyContainer from "./Components/BodyContainer";
import TopNavBar from "./Components/TopNavBar";
import { useState, useEffect } from "react";
import changeBackground from "./Utilities/changeBackground";
import getPosition from "./Utilities/getPosition";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Seattle, WA"); // default location`

  useEffect(() => {
    async function loadData() {
      try {
        let lat, lon, label;
        try {
          // await getPosition(), use its coords, label = "Current Location"
          const position = await getPosition();
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          label = "Current Location";
        } catch {
          // fall back to Seattle coords, label = "Seattle, WA"
          lat = 47.6;
          lon = -122.3;
          label = "Seattle, WA";
        }
        setLocation(label);
        const [weatherRes, alertsRes] = await Promise.all([
          fetch(`/api/weather?lat=${lat}&lon=${lon}`),
          fetch(`/api/alerts?lat=${lat}&lon=${lon}`),
        ]);

        if (!weatherRes.ok || !alertsRes.ok) {
          throw new Error(
            "Failed to load weather data" +
              ". " +
              `Weather: ${weatherRes.status} ${weatherRes.statusText}, Alerts: ${alertsRes.status} ${alertsRes.statusText}`,
          );
        }

        const weatherData = await weatherRes.json();
        const alertsData = await alertsRes.json();

        setWeather(weatherData);
        setAlerts(alertsData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return <div>Weather Data is Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // weather is guaranteed non-null from here down
  const backgroundClass = changeBackground(weather.current.condition);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-blue-100 flex flex-col">
      <TopNavBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className={`${backgroundClass} flex-1 min-w-0`}>
        <BodyContainer
          isSidebarOpen={isSidebarOpen}
          location={location}
          currentWeather={weather.current}
          hourlyForecast={weather.hourly}
          dailyForecast={weather.daily}
          alerts={alerts}
        />
      </div>
    </div>
  );
}

export default App;
