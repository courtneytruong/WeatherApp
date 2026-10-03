import conditionIcons from "../Utilities/conditionIcons";

function CurrentWeatherContainer({ currentWeather, location }) {
  return (
    <div className="flex flex-col items-center justify-center text-white text-shadow-lg/50 pt-10 pb-2 w-full">
      <div className="text-2xl font-semibold">{location}</div>
      <div className="text-6xl ">{currentWeather.temp}°F</div>
      <div className="flex flex-row items-center justify-center gap-2 text-md font-semibold">
        {conditionIcons(currentWeather.condition)}
        {currentWeather.condition}
      </div>
      <div className="text-md font-semibold">
        Feels like: {currentWeather.feelsLike}°F
      </div>
      <div className="flex justify-center w-full gap-2 text-md font-semibold">
        <div>High: {currentWeather.high}°F</div>
        <div>Low: {currentWeather.low}°F</div>
      </div>
    </div>
  );
}

export default CurrentWeatherContainer;
