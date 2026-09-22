import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";

function Visibility() {
  return (
    <ForecastContainer
      title="Visibility"
      items={placeholderData.Visibility}
      renderItem={(item) => (
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      )}
    />
  );
}

export default Visibility;
