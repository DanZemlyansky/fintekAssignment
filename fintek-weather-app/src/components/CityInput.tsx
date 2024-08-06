import "../styles/CityInput.css";

export default function CityInput() {
  return (
    <div className="cityInputContainer">
      <label htmlFor="cityInput" className="cityInputLabel">
        City name
      </label>
      <div className="inputButtonContainer">
        <input
          aria-label="City Input"
          name="cityInput"
          id="cityInput"
          className="cityInput"
        />
        <button type="submit" className="cityInputButton">
          Check
        </button>
      </div>
    </div>
  );
}
