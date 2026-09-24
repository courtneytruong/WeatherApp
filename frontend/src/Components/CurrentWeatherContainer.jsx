import placeholderData from "../Utilities/placeholderData";
import conditionIcons from "../Utilities/conditionIcons";

function CurrentWeatherContainer() {
  return (
    <div className="flex flex-col items-center justify-center text-white text-shadow-lg/50 pt-10 pb-2 w-full">
      <div className="text-2xl font-semibold">{placeholderData.location}</div>
      <div className="text-6xl ">{placeholderData.current.temp}°F</div>
      <div className="flex flex-row items-center justify-center gap-2 text-md font-semibold">
        {conditionIcons(placeholderData.current.condition)}
        {placeholderData.current.condition}
      </div>
      <div className="text-md font-semibold">
        Feels like: {placeholderData.current.feelsLike}°F
      </div>
      <div className="flex justify-center w-full gap-2 text-md font-semibold">
        <div>High: {placeholderData.current.high}°F</div>
        <div>Low: {placeholderData.current.low}°F</div>
      </div>
    </div>
  );
}

export default CurrentWeatherContainer;
