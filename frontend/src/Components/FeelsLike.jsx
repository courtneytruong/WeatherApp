import ForecastContainer from "./ForecastContainer";
import placeholderData from "../Utilities/placeholderData";
import { IoThermometerOutline } from "react-icons/io5";

function feelsLikeText(temp, feelsLike) {
  const diff = feelsLike - temp;

  switch (Math.sign(diff)) {
    case 1:
      return "Feels warmer than the actual temperature";
    case -1:
      return "Feels cooler than the actual temperature";
    default:
      return "Similar to the actual temperature";
  }
}

function FeelsLike() {
  return (
    <ForecastContainer
      title={
        <div className="flex justify-center items-center gap-1">
          <IoThermometerOutline /> Feels Like
        </div>
      }
      items={[placeholderData.current]}
      renderItem={(item) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-4xl">{item.feelsLike}°</span>
          <span className="text-sm font-semibold">
            {feelsLikeText(item.temp, item.feelsLike)}
          </span>
        </div>
      )}
    />
  );
}

export default FeelsLike;
