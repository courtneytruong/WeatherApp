import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";
import { WiHumidity } from "react-icons/wi";

function Humidity() {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-1">
          <WiHumidity /> Humidity
        </div>
      }
      items={placeholderData.Humidity}
      renderItem={(item) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-4xl">{item.value}</span>
          <span className="text-sm font-semibold">
            The dew point is {item.dewPoint} right now
          </span>
        </div>
      )}
    />
  );
}

export default Humidity;
