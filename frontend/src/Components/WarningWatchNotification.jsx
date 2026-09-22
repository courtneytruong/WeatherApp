import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import placeholderData from "../Utilities/placeholderData";

//changes div formatting based on alert severity
function alertFormattingChange(severity) {
  switch (severity) {
    case "Severe":
      return "bg-red-100 border-l-4 border-red-500 text-red-800 p-2";
    case "Moderate":
      return "bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-2";
    case "Minor":
      return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-2";
    default:
      return "bg-gray-100 border-l-4 border-gray-500 text-gray-800 p-2";
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
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center justify-start gap-1 shrink-0">
                  <FiAlertTriangle />
                  <p className="font-bold">{alert.event}</p>
                </div>
                {isAlertCollapsed && (
                  <div className="mt-1 overflow-hidden whitespace-nowrap">
                    <p className="animate-marquee inline-block">
                      {alert.headline} &nbsp;•&nbsp; {alert.description}
                      &nbsp;•&nbsp; Effective:{" "}
                      {new Date(alert.effective).toLocaleString()} &nbsp;•&nbsp;
                      Expires: {new Date(alert.expires).toLocaleString()}
                    </p>
                  </div>
                )}
                <div>
                  <button
                    onClick={() => toggleCollapsed(key)}
                    className="text-2xl p-3"
                  >
                    {isAlertCollapsed ? <FiChevronDown /> : <FiChevronUp />}
                  </button>
                </div>
              </div>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isAlertCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p>{alert.headline}</p>
                  <p>{alert.description}</p>
                  <p>Effective: {new Date(alert.effective).toLocaleString()}</p>
                  <p>Expires: {new Date(alert.expires).toLocaleString()}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WarningWatchNotification;
