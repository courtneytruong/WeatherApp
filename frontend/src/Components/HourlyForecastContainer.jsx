import placeholderData from "../Utilities/placeholderData";
import ForecastContainer from "./ForecastContainer";

function HourlyForecastContainer() {
  return (
    <ForecastContainer
      title="Hourly Forecast"
      items={placeholderData.hourly}
      scroll
      renderItem={(hour) => (
        <div className="flex flex-col items-center justify-center rounded-lg p-3 gap-1">
          <span className="font-semibold">{hour.time}</span>
          <span className="text-2xl">{hour.temp}°</span>
          <span className="text-sm">{hour.condition}</span>
        </div>
      )}
    />
  );
}

export default HourlyForecastContainer;
