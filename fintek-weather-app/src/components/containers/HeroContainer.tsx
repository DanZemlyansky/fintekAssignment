import CityInput from "../CityInput";
import fintekLogo from "../../assets/logo.svg";
import LatLong from "../hero/LatLong";
import "../../styles/HeroContainer.css";

export default function HeroContainer() {
  return (
    <section id="heroContainer">
      <div id="heroImgContainer">
        <img id="fintekImg" src={fintekLogo} alt="fintek"></img>
      </div>
      <div className="heroMainContainer">
        <p id="heroText">
          Use our weather app to see the weather around the world
        </p>
        <CityInput />
      </div>
      <LatLong />
    </section>
  );
}
