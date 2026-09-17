import placeholderData from "../Utilities/placeholderData";

function TenDayForecastContainer() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-200 text-white p-4">
      <h2>10-Day Forecast</h2>
      <p>
        {placeholderData.daily.map((day, index) => (
          <span key={index}>
            {day.day}: High {day.high}°, Low {day.low}° - {day.condition}
          </span>
        ))}
      </p>
    </div>
  );
}

export default TenDayForecastContainer;
