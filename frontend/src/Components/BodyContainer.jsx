import CurrentWeatherContainer from "./CurrentWeatherContainer";
import HourlyForecastContainer from "./HourlyForecastContainer";
import TenDayForecastContainer from "./TenDayForecastContainer";

function BodyContainer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <CurrentWeatherContainer />
      <HourlyForecastContainer />
      <TenDayForecastContainer />
    </div>
  );
}

export default BodyContainer;
