import CurrentWeatherContainer from "./CurrentWeatherContainer";
import HourlyForecastContainer from "./HourlyForecastContainer";
import TenDayForecastContainer from "./TenDayForecastContainer";
import ExtraInfoContainer from "./ExtraInfoContainer";
import SidebarContainer from "./SidebarContainer";
import WarningWatchNotification from "./WarningWatchNotification";

function BodyContainer({
  isSidebarOpen,
  location,
  currentWeather,
  hourlyForecast,
  dailyForecast,
  alerts,
  details,
}) {
  return (
    // BodyContainer.jsx
    <div className="flex items-center justify-center m-4 pt-10">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <WarningWatchNotification alerts={alerts} />
        <CurrentWeatherContainer
          currentWeather={currentWeather}
          location={location}
        />
        <HourlyForecastContainer hourlyForecast={hourlyForecast} />
        <TenDayForecastContainer dailyForecast={dailyForecast} />
        <ExtraInfoContainer currentWeather={currentWeather} details={details} />
        <SidebarContainer isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default BodyContainer;
