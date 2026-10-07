import ForecastContainer from "./ForecastContainer";
import { FiAlertTriangle } from "react-icons/fi";

function ErrorScreen({ message }) {
  return (
    <div className="flex justify-center m-4 pt-32">
      <div className="w-full max-w-sm">
        <ForecastContainer title="Something went wrong">
          <div className="flex flex-col items-center gap-4">
            <FiAlertTriangle className="h-14 w-14 text-red-500" />
            <div className="text-xl">{message}</div>
          </div>
        </ForecastContainer>
      </div>
    </div>
  );
}
export default ErrorScreen;
