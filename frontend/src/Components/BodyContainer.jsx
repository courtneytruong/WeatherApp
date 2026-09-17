import CurrentWeatherContainer from "./CurrentWeatherContainer";
import HourlyForecastContainer from "./HourlyForecastContainer";
import TenDayForecastContainer from "./TenDayForecastContainer";

function BodyContainer() {
  return (
    // BodyContainer.jsx
    <div className="flex items-center justify-center m-4">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <CurrentWeatherContainer />
        <HourlyForecastContainer />
        <TenDayForecastContainer />
      </div>
    </div>
  );
}

export default BodyContainer;
