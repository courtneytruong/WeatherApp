import placeholderData from "../Utilities/placeholderData";

function WarningWatchNotification() {
  return (
    <div
      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 w-full"
      role="alert"
    >
      <p className="font-bold">{placeholderData.alerts[0].event}</p>
      <p>{placeholderData.alerts[0].headline}</p>
      <p>{placeholderData.alerts[0].description}</p>
      <p>
        Effective:{" "}
        {new Date(placeholderData.alerts[0].effective).toLocaleString()}
      </p>
      <p>
        Expires: {new Date(placeholderData.alerts[0].expires).toLocaleString()}
      </p>
    </div>
  );
}

export default WarningWatchNotification;
