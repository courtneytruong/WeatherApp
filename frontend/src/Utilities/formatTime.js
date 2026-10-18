function formatTime(timeString) {
  const date = new Date(timeString);
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default formatTime;
