import placeholderData from "../Utilities/placeholderData";

function CurrentWeatherContainer() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500 text-white p-4">
      <div className="text-2xl font-semibold">{placeholderData.location}</div>
      <div className="text-4xl font-semibold">
        {placeholderData.current.temp}°F
      </div>
      <div className="text-lg font-semibold">
        {placeholderData.current.condition}
      </div>
      <div className="text-md font-semibold">
        Feels like: {placeholderData.current.feelsLike}°F
      </div>
      <div className="flex justify-between w-full gap-2 text-md font-semibold">
        <div>High: {placeholderData.current.high}°F</div>
        <div>Low: {placeholderData.current.low}°F</div>
      </div>
    </div>
  );
}

export default CurrentWeatherContainer;
