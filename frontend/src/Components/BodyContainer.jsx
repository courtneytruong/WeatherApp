import CurrentWeatherContainer from "./CurrentWeatherContainer";
import HourlyForecastContainer from "./HourlyForecastContainer";
import TenDayForecastContainer from "./TenDayForecastContainer";
import ExtraInfoContainer from "./ExtraInfoContainer";
import SidebarContainer from "./SidebarContainer";

function BodyContainer({ isSidebarOpen }) {
  return (
    // BodyContainer.jsx
    <div className="flex items-center justify-center m-4 pt-10">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <CurrentWeatherContainer />
        <HourlyForecastContainer />
        <TenDayForecastContainer />
        <ExtraInfoContainer />
        <SidebarContainer isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default BodyContainer;
