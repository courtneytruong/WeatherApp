function moonphaseCalculator(date) {
  const referenceDate = new Date("2000-01-06T18:14:00Z");
  const daysSinceReference = (date - referenceDate) / (1000 * 60 * 60 * 24);
  const synodicMonth = 29.53058867;
  const moonAge = daysSinceReference % synodicMonth;
  const phase = Math.round((moonAge / synodicMonth) * 8) % 8;

  if (phase === 0) {
    return "New Moon";
  }
  if (phase === 1) {
    return "Waxing Crescent";
  }
  if (phase === 2) {
    return "First Quarter";
  }
  if (phase === 3) {
    return "Waxing Gibbous";
  }
  if (phase === 4) {
    return "Full Moon";
  }
  if (phase === 5) {
    return "Waning Gibbous";
  }
  if (phase === 6) {
    return "Last Quarter";
  }
  return "Waning Crescent";
}

export default moonphaseCalculator;
