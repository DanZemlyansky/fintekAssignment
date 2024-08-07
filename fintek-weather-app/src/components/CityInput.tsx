import axios from "axios";
import "../styles/CityInput.css";
import { WeatherApiResponse, ForecastApiResponse } from "../Types";
import { useState } from "react";
import { useWeatherContext } from "../WeatherContext";

export default function CityInput() {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null); 
  const { setWeatherData, setForecastData } = useWeatherContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    


    try {
      setError(null);
      const weatherResponse = await axios.get<WeatherApiResponse>(`http://localhost:3000/api/getWeather?city=${city}`);
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get<ForecastApiResponse>(`http://localhost:3000/api/getForecast?city=${city}`);
      setForecastData(forecastResponse.data);

    } catch (error) {
      setError("Please enter a city name.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cityInputContainer">
      <label htmlFor="cityInput" className="cityInputLabel">
        City name
      </label>
      <div className="inputButtonContainer">
        <input
          aria-label="City Input"
          name="cityInput"
          id="cityInput"
          className="cityInput"
          value={city}
          onChange={handleInputChange}
          aria-required="true"
          aria-describedby="cityInputError" 
        />
        <button type="submit" className="cityInputButton">
          Check
        </button>
      </div>
      {error && <span className="errorMsg">{error}</span>}
    </form>
  );
}
