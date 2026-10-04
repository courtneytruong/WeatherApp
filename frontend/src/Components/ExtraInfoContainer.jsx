import Humidity from "./Humidity";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import SunriseSunset from "./SunriseSunset";
import Moonphase from "./Moonphase";
import Precipitation from "./Precipitation";
import FeelsLike from "./FeelsLike";

function ExtraInfoContainer() {
  return (
    <div className="flex flex-row justify-between gap-4">
      <FeelsLike />
      <Humidity />
      <Precipitation />
      <UVIndex />
      <Visibility />
      <SunriseSunset />
      <Moonphase />
    </div>
  );
}

export default ExtraInfoContainer;
