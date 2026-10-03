import "./App.css";
import "./index.css";
import BodyContainer from "./Components/BodyContainer";
import TopNavBar from "./Components/TopNavBar";
import { useState, useEffect } from "react";
import changeBackground from "./Utilities/changeBackground";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const lat = 47.6; // hardcoded until step 4
        const lon = -122.3;

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
          location={"Seattle, WA"} // hardcoded until step 4
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
