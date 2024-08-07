import CityInput from "../CityInput";
import fintekLogo from "../../assets/logo.svg";
import LatLong from "../hero/LatLong";
import "../../styles/HeroContainer.css";

export default function HeroContainer() {
  return (
    <section id="heroContainer" aria-labelledby="heroText" role="region">
      <div id="heroImgContainer" role="img" aria-label="Fintek Logo">
        <img id="fintekImg" src={fintekLogo} alt="Fintek Logo"></img>
      </div>
      <div className="heroMainContainer">
        <p id="heroText">
          Use our weather app to see the weather around the world
        </p>
        <CityInput aria-label="City Input" />
      </div>
      <LatLong aria-label="Latitude and Longitude Display" />
    </section>
  );
}
