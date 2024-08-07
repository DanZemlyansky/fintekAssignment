import "../../styles/CardContainer.css";
import { useWeatherContext } from "../../WeatherContext";
import WeatherCard from "../card/WeatherCard";

export default function CardContainer() {
  const { weatherData, forecastData } = useWeatherContext();
  if (!weatherData || !forecastData) {
    return <section id="cardContainerNoData"></section>;
  }
  return (
    <section
      id="cardContainer"
      role="region"
      aria-labelledby="cardContainerTitle"
    >
      <WeatherCard aria-label="Weather Card" />
    </section>
  );
}
