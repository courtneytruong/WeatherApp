//grabs the user's current position using the Geolocation API and returns a Promise that resolves with the position data or rejects with an error if the position cannot be obtained within the specified timeout period. The maximumAge option allows for caching of the position data for up to 10 minutes.

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      timeout: 10000,
      maximumAge: 600000,
    });
  });
}

export default getPosition;
