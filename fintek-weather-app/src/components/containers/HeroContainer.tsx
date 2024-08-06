import CityInput from "../CityInput";
import fintekLogo from '../../assets/logo.svg'
import LatLong from "../hero/LatLong";
import '../../styles/HeroContainer.css'

//! pass function to cityInput and call the backend from there
export default function HeroContainer(){

    return(
        <section id="heroContainer">
            <img id="fintekImg" src={fintekLogo}  alt='fintek'></img>
            <p id="heroText">Use our weather app to see the weather around the world</p>
<CityInput/>
<LatLong/>
        </section>
    )
}