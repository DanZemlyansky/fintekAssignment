import { useWeatherContext } from "../../WeatherContext";
import "../../styles/LatLong.css";

export default function LatLong() {
  const { weatherData } = useWeatherContext();
  if (!weatherData) {
    return (
      <section id="latLongContainer">
        <div id="latLongData">
          <span className="latLong"></span>
          <span className="latLong"></span>
        </div>
        <span className="latLong"></span>
      </section>
    );
  }

  const { lat, lon } = weatherData.location;
  const lastUpdated = weatherData.current.last_updated;
  const [date, time] = lastUpdated.split(" ");

  console.log(weatherData.current.last_updated);

  return (
    <section id="latLongContainer">
      <div id="latLongData">
        <span className="latLong">Latitude: {lat}</span>
        <span className="latLong">Longitude: {lon}</span>
      </div>
      <span className="latLong">
        Accurate to {date} at {time}
      </span>
    </section>
  );
}
