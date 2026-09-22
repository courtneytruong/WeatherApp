import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import placeholderData from "../Utilities/placeholderData";

//changes div formatting based on alert severity
function alertFormattingChange(severity) {
  switch (severity) {
    case "Severe":
      return "bg-red-100 border-l-4 border-red-500 text-red-800 p-4";
    case "Moderate":
      return "bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-4";
    case "Minor":
      return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4";
    default:
      return "bg-gray-100 border-l-4 border-gray-500 text-gray-800 p-4";
  }
}

function WarningWatchNotification() {
  const [isCollapsed, setIsCollapsed] = useState(new Set());

  const toggleCollapsed = (key) => {
    setIsCollapsed((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  {
    return (
      <div className="flex w-full flex-col gap-1">
        {placeholderData.alerts.map((alert) => {
          const key = `${alert.event}-${alert.effective}`;
          const isAlertCollapsed = isCollapsed.has(key);

          return (
            <div
              key={key}
              className={alertFormattingChange(alert.severity)}
              role="alert"
            >
              <button
                onClick={() => toggleCollapsed(key)}
                className="duration-300 ease-in-out text-2xl p-3"
              >
                {isAlertCollapsed ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              <p className="font-bold">{alert.event}</p>
              {!isAlertCollapsed && (
                <>
                  <p>{alert.headline}</p>
                  <p>{alert.description}</p>
                  <p>Effective: {new Date(alert.effective).toLocaleString()}</p>
                  <p>Expires: {new Date(alert.expires).toLocaleString()}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default WarningWatchNotification;
