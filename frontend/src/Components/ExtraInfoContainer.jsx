import Humidity from "./Humidity";
import UVIndex from "./UVIndex";
import Visibility from "./Visibility";
import SunriseSunset from "./SunriseSunset";
import Moonphase from "./Moonphase";
import Precipitation from "./Precipitation";
import FeelsLike from "./FeelsLike";

function ExtraInfoContainer({ currentWeather, details }) {
  return (
    <div className="flex flex-row justify-between gap-4">
      <FeelsLike currentWeather={currentWeather} />
      <Humidity details={details} />
      <Precipitation details={details} />
      <UVIndex details={details} />
      <Visibility details={details} />
      <SunriseSunset details={details} />
      <Moonphase />
    </div>
  );
}

export default ExtraInfoContainer;
