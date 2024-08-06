import '../styles/CityInput.css'

export default function CityInput(){




    return(
        <div id="cityInputContainer">
<label id="cityInputLabel" htmlFor="cityInput">City name</label>
<input aria-label="City Input" name="cityInput" id="cityInput"></input>
<button type="submit">Check</button>
        </div>
    )
}