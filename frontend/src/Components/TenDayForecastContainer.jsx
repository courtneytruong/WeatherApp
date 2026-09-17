// TenDayForecastContainer.jsx
import placeholderData from "../Utilities/placeholderData";
import ForecastContainer from "./ForecastContainer";

function TenDayForecastContainer() {
  return (
    <ForecastContainer
      title="10-Day Forecast"
      items={placeholderData.daily}
      scroll
      renderItem={(day) => (
        <div className="flex flex-col items-center justify-center rounded-lg p-3 gap-1">
          <span className="font-semibold">{day.day}</span>
          <span className="text-2xl">H: {day.high}°</span>
          <span className="text-2xl">L: {day.low}°</span>
          <span className="text-sm">{day.condition}</span>
        </div>
      )}
    />
  );
}

export default TenDayForecastContainer;
