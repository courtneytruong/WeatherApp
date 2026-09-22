import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";

function Humidity() {
  return (
    <ForecastContainer
      title="Humidity"
      items={placeholderData.Humidity}
      renderItem={(item) => (
        <div className="flex items-center justify-center gap-2">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      )}
    />
  );
}

export default Humidity;
