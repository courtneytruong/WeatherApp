import ForecastContainer from "./ForecastContainer";
import { TbUvIndex } from "react-icons/tb";

function uvIndexLabel(uvIndex) {
  if (uvIndex <= 2) {
    return "Low";
  }
  if (uvIndex <= 5) {
    return "Moderate";
  }
  if (uvIndex <= 7) {
    return "High";
  }
  if (uvIndex <= 10) {
    return "Very High";
  }
  return "Extreme";
}

function UVIndex({ details }) {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-2">
          <TbUvIndex /> UV Index
        </div>
      }
      items={[details]}
      renderItem={(item) => (
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="text-4xl">{item.uvIndex}</div>
          <div className="text-lg font-semibold">
            {uvIndexLabel(item.uvIndex)}
          </div>
        </div>
      )}
    />
  );
}

export default UVIndex;
