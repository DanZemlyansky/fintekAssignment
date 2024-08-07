import "../../styles/CardContainer.css";
import { useWeatherContext } from "../../WeatherContext";
import WeatherCard from "../card/WeatherCard";

export default function CardContainer() {
const weatherData = useWeatherContext();

if(!weatherData){
  return null
}

  return (
    <section id="cardContainer">
<WeatherCard/>
      </section>
  );
}
