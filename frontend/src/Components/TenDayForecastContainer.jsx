// TenDayForecastContainer.jsx
import placeholderData from "../Utilities/placeholderData";
import ForecastContainer from "./ForecastContainer";
import conditionIcons from "../Utilities/conditionIcons";
import { FaRegCalendarAlt } from "react-icons/fa";

function TenDayForecastContainer() {
  return (
    <ForecastContainer
      title={
        <div className="flex justify-center items-center gap-2">
          <FaRegCalendarAlt /> 10-Day Forecast
        </div>
      }
      items={placeholderData.daily}
      scroll
      renderItem={(day) => (
        <div className="flex flex-col items-center justify-center rounded-lg p-3 gap-1">
          <span className="font-semibold">{day.day}</span>
          <span className="text-2xl">H: {day.high}°</span>
          <span className="text-2xl">L: {day.low}°</span>
          <span className="flex flex-row items-center justify-center gap-2 text-sm">
            {conditionIcons(day.condition)}
            {day.condition}
          </span>
        </div>
      )}
    />
  );
}

export default TenDayForecastContainer;
