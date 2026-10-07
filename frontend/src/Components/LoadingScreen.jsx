import ForecastContainer from "./ForecastContainer";

function LoadingScreen({ message }) {
  return (
    <div className="flex justify-center m-4 pt-32">
      <div className="w-full max-w-sm">
        <ForecastContainer title="Loading">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-white/40 border-t-white animate-spin" />
            <div className="text-xl">{message}</div>
          </div>
        </ForecastContainer>
      </div>
    </div>
  );
}
export default LoadingScreen;
