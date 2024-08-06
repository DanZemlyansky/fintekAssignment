import CityInput from "../CityInput";
import fintekLogo from '../../assets/logo.svg'
import LatLong from "../hero/LatLong";

//! pass function to cityInput and call the backend from there
export default function HeroContainer(){

    return(
        <section id="heroContainer">
            <img src={fintekLogo}  alt='fintek'></img>
            <p id="heroText">Use our weather app to see the weather around the world</p>
<CityInput/>
<LatLong/>
        </section>
    )
}