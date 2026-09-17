import placeholderData from "../Utilities/placeholderData";

function HourlyForecastContainer() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-300 text-white p-4">
      <h2>Hourly Forecast</h2>
      <p>
        {placeholderData.hourly.map((hour, index) => (
          <span key={index}>
            {hour.time}: {hour.temp}° {hour.condition}
          </span>
        ))}
      </p>
    </div>
  );
}

export default HourlyForecastContainer;
