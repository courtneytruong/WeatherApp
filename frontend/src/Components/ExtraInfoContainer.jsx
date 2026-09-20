import Humidity from "./Humidity";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import SunriseSunset from "./SunriseSunset";
import Moonphase from "./Moonphase";
import Precipitation from "./Precipitation";

function ExtraInfoContainer() {
  return (
    <div className="flex flex-col-6 justify-between gap-4">
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
