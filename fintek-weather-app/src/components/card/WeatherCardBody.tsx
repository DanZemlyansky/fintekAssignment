import "../../styles/WeatherCardBody.css";
import "../../styles/WeatherCardFooter.css";
import { useWeatherContext } from "../../WeatherContext";

export default function WeatherCardBody() {
  const { forecastData } = useWeatherContext();

  if (!forecastData) {
    return null;
  }

  return (
    <section aria-labelledby="weatherSummaryTitle">
      <div className="weatherBodyDegrees">
        <span
          className="weatherDegree"
          aria-label={`Temperature: ${Math.round(
            forecastData.current.temp_c
          )} degrees Celsius`}
        >
          {Math.round(forecastData.current.temp_c)}&deg;
        </span>
        <span
          className="weatherDesc"
          aria-label={`Condition: ${forecastData.current.condition.text}`}
        >
          {forecastData.current.condition.text}
        </span>
      </div>

      <div className="weatherBodyDataContainer">
        <div
          className="weatherBodyData weatherSnippet"
          aria-label={`Precipitation: ${forecastData.current.precip_mm} mm`}
        >
          <span className="weatherSnippetPrimary">Precipitation</span>
          <span className="weatherSnippetSecondary">
            {forecastData.current.precip_mm} mm
          </span>
        </div>
        <div
          className="weatherBodyData weatherSnippet"
          aria-label={`Humidity: ${forecastData.current.humidity}%`}
        >
          <span className="weatherSnippetPrimary">Humidity</span>
          <span className="weatherSnippetSecondary">
            {forecastData.current.humidity}%
          </span>
        </div>
        <div
          className="weatherBodyData weatherSnippet"
          aria-label={`Wind Speed: ${forecastData.current.wind_kph} km/h`}
        >
          <span className="weatherSnippetPrimary">Wind</span>
          <span className="weatherSnippetSecondary">
            {forecastData.current.wind_kph} km/h
          </span>
        </div>
      </div>
    </section>
  );
}
