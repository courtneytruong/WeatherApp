//logic for changing the background based on the weather conditions

function changeBackground(condition) {
  switch (condition) {
    case "Clear":
      return "theme-clear";
    case "Rain":
      return "theme-rain";
    case "Drizzle":
      return "theme-drizzle";
    case "Fog":
      return "theme-fog";
    case "Snow":
      return "theme-snow";
    case "Thunderstorm":
      return "theme-thunderstorm";
    case "Overcast":
      return "theme-overcast-cloudy";
    case "Partly Cloudy":
      return "theme-partly-cloudy";
    default:
      return "theme-default";
  }
}

export default changeBackground;
