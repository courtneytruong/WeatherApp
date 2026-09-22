import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";

function Precipitation() {
  return (
    <ForecastContainer
      title="Precipitation"
      items={placeholderData.Precipitation}
      renderItem={(item) => (
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      )}
    />
  );
}

export default Precipitation;
