import "../../styles/WeatherCardBody.css";
import '../../styles/WeatherCardFooter.css'
import { useWeatherContext } from "../../WeatherContext";



export default function WeatherCardBody() {
  const { forecastData } = useWeatherContext();
  
  if (!forecastData) {
    return null; 
  }




  return (
    <section>
      <div className="weatherBodyDegrees">
        <span className="weatherDegree">{Math.round(forecastData.current.temp_c)}&deg;</span>
        <span className="weatherDesc">{forecastData.current.condition.text}</span>
      </div>

      <div className="weatherBodyDataContainer">
        <div className="weatherBodyData weatherSnippet">
          <span className="weatherSnippetPrimary">precipitation</span>
          <span className="weatherSnippetSecondary">{forecastData.current.precip_mm} mm</span>
        </div>
        <div className="weatherBodyData weatherSnippet">
          <span className="weatherSnippetPrimary">Humidity</span>
          <span className="weatherSnippetSecondary">{forecastData.current.humidity}%</span>
        </div>
              <div className="weatherBodyData weatherSnippet">
          <span className="weatherSnippetPrimary">wind</span>
          <span className="weatherSnippetSecondary">{forecastData.current.wind_kph} km/h</span>
        </div>
      </div>
    </section>
  );
}
