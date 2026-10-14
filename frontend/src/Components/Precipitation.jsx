import ForecastContainer from "./ForecastContainer";
import { IoRainyOutline } from "react-icons/io5";

function Precipitation({ details }) {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-2">
          <IoRainyOutline /> Precipitation
        </div>
      }
      items={[details]}
      renderItem={(item) => (
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="text-sm font-semibold">Total Precipitation:</div>
          <div className="text-4xl">{item.precipitationToday} in</div>
        </div>
      )}
    />
  );
}

export default Precipitation;
