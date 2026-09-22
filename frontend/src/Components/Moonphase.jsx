import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";

function Moonphase() {
  return (
    <ForecastContainer
      title="Moon Phase"
      items={placeholderData.Moonphase}
      renderItem={(item) => (
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      )}
    />
  );
}

export default Moonphase;
