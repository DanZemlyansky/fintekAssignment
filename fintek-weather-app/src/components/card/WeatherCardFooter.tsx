import "../../styles/WeatherCardFooter.css";
import { useWeatherContext } from "../../WeatherContext";

export default function WeatherCardFooter() {
  const { forecastData } = useWeatherContext();

  if (!forecastData || !Array.isArray(forecastData.forecast)) {
    return null;
  }

  const forecast = forecastData.forecast;

  return (
    <section id="weatherFooterContainer" aria-labelledby="weatherFooterTitle">
      {forecast.map((hour, index) => (
        <div
          key={index}
          className="weatherSnippet"
          aria-label={`Weather at ${hour.time.slice(11, 16)}: ${Math.round(
            hour.temp_c
          )}°C`}
        >
          <span className="weatherSnippetPrimary">
            {hour.time.slice(11, 16)}
          </span>
          <span className="weatherSnippetSecondary">
            {Math.round(hour.temp_c)}°C
          </span>
        </div>
      ))}
    </section>
  );
}
