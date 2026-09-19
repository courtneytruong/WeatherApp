import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";

function UVIndex() {
  return (
    <ForecastContainer
      title="UV Index"
      items={placeholderData.UVIndex}
      renderItem={(item) => (
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      )}
    />
  );
}

export default UVIndex;
