import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";

function SunriseSunset() {
  return (
    <ForecastContainer
      title="Sunrise & Sunset"
      items={placeholderData.Sunrise}
      renderItem={(item) => (
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      )}
    />
  );
}

export default SunriseSunset;
