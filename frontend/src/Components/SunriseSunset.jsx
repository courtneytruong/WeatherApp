import ForecastContainer from "./ForecastContainer";
import { PiSunHorizonBold } from "react-icons/pi";
import formatTime from "../Utilities/formatTime";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

function SunriseSunset({ details }) {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-2">
          <PiSunHorizonBold /> Sunrise & Sunset
        </div>
      }
      items={[details]}
      renderItem={(item) => (
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <FiSunrise /> Sunrise:
          </div>
          <div className="text-2xl">{formatTime(item.sunrise)}</div>
          <div className="flex items-center justify-center gap-2">
            <FiSunset /> Sunset:
          </div>
          <div className="text-2xl">{formatTime(item.sunset)}</div>
        </div>
      )}
    />
  );
}

export default SunriseSunset;
