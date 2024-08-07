import CityInput from "../CityInput";
import fintekLogo from "../../assets/logo.svg";
import LatLong from "../hero/LatLong";
import "../../styles/HeroContainer.css";
import { useState } from "react";
import { WeatherApiResponse } from "../../Types";

export default function HeroContainer() {
const [weatherData , setWeatherData] = useState<WeatherApiResponse | null>(null);

const handleWeatherData = (data: WeatherApiResponse) => {
    setWeatherData(data);
    console.log(weatherData);
    
  };

  return (
    <section id="heroContainer">
      <div id="heroImgContainer">
        <img id="fintekImg" src={fintekLogo} alt="fintek"></img>
      </div>
      <div className="heroMainContainer">
          <p id="heroText">
            Use our weather app to see the weather around the world
          </p>
          <CityInput  onWeatherData={handleWeatherData}/>
      </div>
      <LatLong />
    </section>
  );
}
