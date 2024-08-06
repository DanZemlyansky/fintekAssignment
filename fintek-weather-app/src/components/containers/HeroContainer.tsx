import CityInput from "../CityInput";
import fintekLogo from '../../assets/logo.svg'


//! pass function to cityInput and call the backend from there
export default function HeroContainer(){

    return(
        <section id="heroContainer">
            <img src={fintekLogo}  alt='fintek'></img>
<CityInput/>
        </section>
    )
}