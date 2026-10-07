import ForecastContainer from "./ForecastContainer";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosRefresh } from "react-icons/io";

function ErrorScreen({ message, onRetry }) {
  return (
    <div className="flex justify-center m-4 pt-32">
      <div className="w-full max-w-sm">
        <ForecastContainer title="Something went wrong...">
          <div className="flex flex-col items-center gap-4">
            <FiAlertTriangle className="h-14 w-14 text-red-500" />
            <div className="text-lg font-semibold text-center">
              We couldn't load the weather right now.
            </div>
            <div className="text-sm text-centerfont-light">{message}</div>
            <button
              type="button"
              onClick={onRetry}
              className="flex items-center justify-center cursor-pointer bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-xl"
            >
              <IoIosRefresh className="mr-1" /> Try again
            </button>
          </div>
        </ForecastContainer>
      </div>
    </div>
  );
}
export default ErrorScreen;
