import { IoSunnyOutline } from "react-icons/io5";
import { IoRainyOutline } from "react-icons/io5";
import { SiDrizzle } from "react-icons/si";
import { BsCloudFog } from "react-icons/bs";
import { IoSnowOutline } from "react-icons/io5";
import { IoThunderstormOutline } from "react-icons/io5";
import { IoCloudyOutline } from "react-icons/io5";
import { WiDayCloudy } from "react-icons/wi";

//logic for changing the icon for weather condition

function conditionIcons(condition) {
  switch (condition) {
    case "Clear":
      return <IoSunnyOutline />;
    case "Rain":
      return <IoRainyOutline />;
    case "Drizzle":
      return <SiDrizzle />;
    case "Fog":
      return <BsCloudFog />;
    case "Snow":
      return <IoSnowOutline />;
    case "Thunderstorm":
      return <IoThunderstormOutline />;
    case "Overcast":
      return <IoCloudyOutline />;
    case "Partly Cloudy":
      return <WiDayCloudy />;
    default:
      return <IoCloudyOutline />;
  }
}

export default conditionIcons;
