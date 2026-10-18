import ForecastContainer from "./ForecastContainer";
import { AiOutlineMoon } from "react-icons/ai";
import moonphaseCalculator from "../Utilities/moonphaseCalculator";
import { WiMoonAltNew } from "react-icons/wi";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { WiMoonAltWaxingGibbous3 } from "react-icons/wi";
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltWaningGibbous2 } from "react-icons/wi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";

function moonphaseIcon(phase) {
  if (phase === "New Moon") {
    return <WiMoonAltNew />;
  }
  if (phase === "Waxing Crescent") {
    return <WiMoonAltWaxingCrescent2 />;
  }
  if (phase === "First Quarter") {
    return <WiMoonAltFirstQuarter />;
  }
  if (phase === "Waxing Gibbous") {
    return <WiMoonAltWaxingGibbous3 />;
  }
  if (phase === "Full Moon") {
    return <WiMoonAltFull />;
  }
  if (phase === "Waning Gibbous") {
    return <WiMoonAltWaningGibbous2 />;
  }
  if (phase === "Last Quarter") {
    return <WiMoonAltThirdQuarter />;
  }
  return <WiMoonAltWaningCrescent5 />;
}

function Moonphase() {
  return (
    <ForecastContainer
      title={
        <div className="flex flex-row items-center gap-2">
          <AiOutlineMoon /> Moon Phase
        </div>
      }
      items={[moonphaseCalculator(new Date())]}
      renderItem={(phase) => (
        <div className="flex flex-col gap-5 items-center justify-between">
          <div className="font-semibold">{phase}</div>
          <div className="text-8xl">{moonphaseIcon(phase)}</div>
        </div>
      )}
    />
  );
}

export default Moonphase;
