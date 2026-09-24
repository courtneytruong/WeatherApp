const placeholderData = {
  location: "Seattle, WA",
  current: {
    temp: 68,
    condition: "Clear",
    feelsLike: 65,
    high: 72,
    low: 58,
  },

  hourly: [
    { time: "3PM", temp: 68, feelsLike: 65, condition: "Clear" },
    { time: "4PM", temp: 69, feelsLike: 66, condition: "Clear" },
    { time: "5PM", temp: 69, feelsLike: 66, condition: "Rain" },
    { time: "6PM", temp: 65, feelsLike: 62, condition: "Rain" },
    { time: "7PM", temp: 64, feelsLike: 61, condition: "Rain" },
    { time: "8PM", temp: 63, feelsLike: 60, condition: "Rain" },
    { time: "9PM", temp: 62, feelsLike: 59, condition: "Overcast" },
    { time: "10PM", temp: 61, feelsLike: 58, condition: "Overcast" },
    { time: "11PM", temp: 60, feelsLike: 57, condition: "Thunderstorm" },
    { time: "12AM", temp: 59, feelsLike: 56, condition: "Thunderstorm" },
    { time: "1AM", temp: 58, feelsLike: 55, condition: "Partly Cloudy" },
    { time: "2AM", temp: 57, feelsLike: 54, condition: "Partly Cloudy" },
    { time: "3AM", temp: 56, feelsLike: 53, condition: "Snow" },
    { time: "4AM", temp: 55, feelsLike: 52, condition: "Snow" },
    { time: "5AM", temp: 54, feelsLike: 51, condition: "Drizzle" },
    { time: "6AM", temp: 53, feelsLike: 50, condition: "Drizzle" },
    { time: "7AM", temp: 52, feelsLike: 49, condition: "Drizzle" },
    { time: "8AM", temp: 51, feelsLike: 48, condition: "Fog" },
    { time: "9AM", temp: 50, feelsLike: 47, condition: "Drizzle" },
  ],
  daily: [
    { day: "Mon", high: 72, low: 58, condition: "Clear" },
    { day: "Tue", high: 75, low: 60, condition: "Clear" },
    { day: "Wed", high: 70, low: 55, condition: "Rain" },
    { day: "Thu", high: 68, low: 54, condition: "Rain" },
    { day: "Fri", high: 71, low: 56, condition: "Fog" },
    { day: "Sat", high: 73, low: 57, condition: "Snow" },
    { day: "Sun", high: 69, low: 55, condition: "Thunderstorm" },
    { day: "Mon", high: 72, low: 58, condition: "Thunderstorm" },
    { day: "Tue", high: 75, low: 60, condition: "Overcast" },
    { day: "Wed", high: 70, low: 55, condition: "Partly Cloudy" },
  ],
  alerts: [
    {
      event: "Winter Storm Warning",
      severity: "Severe",
      headline:
        "Winter Storm Warning in effect from 10 PM tonight to 4 PM tomorrow",
      description:
        "Heavy snow expected. Total snow accumulations of 8 to 12 inches. Travel could be very difficult, especially during the Monday morning commute.",
      effective: "2026-09-20T22:00:00",
      expires: "2026-09-21T16:00:00",
    },
    {
      event: "Flood Watch",
      severity: "Moderate",
      headline: "Flood Watch in effect through Monday evening",
      description:
        "Excessive rainfall may result in flooding of rivers, creeks, streams, and other low-lying and flood-prone areas.",
      effective: "2026-09-20T06:00:00",
      expires: "2026-09-22T18:00:00",
    },
    {
      event: "Heat Advisory",
      severity: "Minor",
      headline: "Heat Advisory in effect from noon to 8 PM",
      description:
        "Heat index values up to 105 expected. Drink plenty of fluids, stay in an air-conditioned room, and avoid prolonged sun exposure.",
      effective: "2026-09-20T12:00:00",
      expires: "2026-09-20T20:00:00",
    },
  ],
  Humidity: [{ label: "Humidity", value: "89%", dewPoint: "65°" }],
  Precipitation: [{ label: "Precipitation", value: "0.1 in" }],
  UVIndex: [{ label: "UV Index", value: 5 }],
  Visibility: [{ label: "Visibility", value: "10 mi" }],
  Sunrise: [{ label: "Sunrise", value: "6:12 AM" }],
  Moonphase: [{ label: "Moon Phase", value: "Waxing Crescent" }],
};

export default placeholderData;
