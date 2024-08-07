import axios from "axios";
import "../styles/CityInput.css";
import { WeatherApiResponse } from "../Types";
import { useState } from "react";
import { useWeatherContext } from "../WeatherContext";

export default function CityInput() {
  const [city, setCity] = useState("");
  const { setWeatherData } = useWeatherContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.get<WeatherApiResponse>(`http://localhost:3000/api/getWeather?city=${city}`);
      setWeatherData(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log("Error getting data from server:", error);
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
        />
        <button type="submit" className="cityInputButton">
          Check
        </button>
      </div>
    </form>
  );
}
