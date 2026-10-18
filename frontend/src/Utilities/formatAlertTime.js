function formatAlertTime(value, fallback) {
  if (value == null) {
    return fallback;
  }
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return fallback;
  }
  return date.toLocaleString();
}

export default formatAlertTime;
