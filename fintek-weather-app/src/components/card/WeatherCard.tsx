import WeatherCardBody from "./WeatherCardBody";
import WeatherCardHead from "./WeatherCardHead";
import WeatherCardFooter from "./WeatherCardFooter";
import "../../styles/WeatherCard.css";
import { useWeatherContext } from "../../WeatherContext";

export default function WeatherCard() {
  const weatherData = useWeatherContext();

  if (!weatherData) {
    return <div></div>;
  }

  return (
    <section id="weatherCardContainer" aria-labelledby="weatherCardTitle">
      <WeatherCardHead aria-labelledby="weatherCardHeadTitle" />
      <WeatherCardBody aria-labelledby="weatherCardBodyTitle" />
      <WeatherCardFooter aria-labelledby="weatherCardFooterTitle" />
    </section>
  );
}
