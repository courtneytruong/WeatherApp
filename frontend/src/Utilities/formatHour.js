function formatHour(timeString) {
  const date = new Date(timeString);
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
  });
}

export default formatHour;
