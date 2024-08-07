import "../../styles/CardContainer.css";
import { useWeatherContext } from "../../WeatherContext";
import WeatherCard from "../card/WeatherCard";

export default function CardContainer() {
  const { weatherData, forecastData } = useWeatherContext(); // Destructure the context
  if (!weatherData || !forecastData) {
    return     <section id="cardContainerNoData">
          </section>;
  }
  return (
    <section id="cardContainer">
<WeatherCard/>
      </section>
  );
}
