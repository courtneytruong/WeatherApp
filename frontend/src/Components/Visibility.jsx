import ForecastContainer from "./ForecastContainer";
import { IoEyeOutline } from "react-icons/io5";

function visibilityLabel(visibility) {
  if (visibility <= 1) {
    return "Very limited view, likely to be foggy or hazy conditions.";
  }
  if (visibility <= 2) {
    return "Poor view, hazy or foggy conditions likely.";
  }
  if (visibility <= 5) {
    return "Reduced view, some haze or fog may be present.";
  }
  if (visibility <= 9) {
    return "Clear View, good visibility with minimal haze or fog.";
  }
  return "Perfect View, excellent visibility with no haze or fog.";
}

function Visibility({ details }) {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-2">
          <IoEyeOutline /> Visibility
        </div>
      }
      items={[details]}
      renderItem={(item) => (
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="text-4xl">{item.visibility} mi</div>
          <div className="text-sm font-semibold text-center">
            {visibilityLabel(item.visibility)}
          </div>
        </div>
      )}
    />
  );
}

export default Visibility;
