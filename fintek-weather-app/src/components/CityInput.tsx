import axios from "axios";
import "../styles/CityInput.css";
import { WeatherApiResponse } from "../Types";
import { useState } from "react";
 
interface CityInputProps {
  onWeatherData: (data: WeatherApiResponse) => void;
}

export default function CityInput({ onWeatherData }: CityInputProps) {
  const [city, setCity] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.get<WeatherApiResponse>(`http://localhost:3000/api/getWeather?city=${city}`);
      onWeatherData(response.data);
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
