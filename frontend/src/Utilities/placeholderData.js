const placeholderData = {
  location: "Seattle, WA",
  current: {
    temp: 68,
    condition: "Partly Cloudy",
    feelsLike: 65,
    high: 72,
    low: 58,
  },
  hourly: [
    { time: "3PM", temp: 68, condition: "Sunny" },
    { time: "4PM", temp: 69, condition: "Sunny" },
    { time: "5PM", temp: 69, condition: "Rainy" },
    { time: "6PM", temp: 65, condition: "Rainy" },
    { time: "7PM", temp: 64, condition: "Rainy" },
    { time: "8PM", temp: 63, condition: "Rainy" },
  ],
  daily: [
    { day: "Mon", high: 72, low: 58, condition: "Cloudy" },
    { day: "Tue", high: 75, low: 60, condition: "Sunny" },
    { day: "Wed", high: 70, low: 55, condition: "Rainy" },
    { day: "Thu", high: 68, low: 54, condition: "Cloudy" },
    { day: "Fri", high: 71, low: 56, condition: "Sunny" },
    { day: "Sat", high: 73, low: 57, condition: "Sunny" },
    { day: "Sun", high: 69, low: 55, condition: "Rainy" },
    { day: "Mon", high: 72, low: 58, condition: "Cloudy" },
    { day: "Tue", high: 75, low: 60, condition: "Sunny" },
    { day: "Wed", high: 70, low: 55, condition: "Rainy" },
  ],
};

export default placeholderData;
