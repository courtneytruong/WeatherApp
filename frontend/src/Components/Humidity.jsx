import ForecastContainer from "./ForecastContainer";
import { WiHumidity } from "react-icons/wi";

function Humidity({ details }) {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-1">
          <WiHumidity /> Humidity
        </div>
      }
      items={[details]}
      renderItem={(item) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-4xl">{item.humidity}%</span>
          <span className="text-sm font-semibold">
            The dew point is {item.dewPoint}°F right now
          </span>
        </div>
      )}
    />
  );
}

export default Humidity;
