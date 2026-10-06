function formatDate(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const options = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

export default formatDate;
