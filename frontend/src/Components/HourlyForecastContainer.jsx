import placeholderData from "../Utilities/placeholderData";
import ForecastContainer from "./ForecastContainer";
import conditionIcons from "../Utilities/conditionIcons.jsx";
import { FaRegClock } from "react-icons/fa";

function HourlyForecastContainer() {
  return (
    <ForecastContainer
      title={
        <div className="flex justify-center items-center gap-2">
          <FaRegClock /> Hourly Forecast
        </div>
      }
      items={placeholderData.hourly}
      scroll
      renderItem={(hour) => (
        <div className="flex flex-col items-center justify-center rounded-lg p-3 gap-1">
          <span className="font-semibold">{hour.time}</span>
          <span className="text-2xl">{hour.temp}°</span>
          <span className="flex row  items-center text-sm gap-2">
            {conditionIcons(hour.condition)}
            {hour.condition}
          </span>
        </div>
      )}
    />
  );
}

export default HourlyForecastContainer;
