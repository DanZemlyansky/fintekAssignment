import WeatherCardBody from "./WeatherCardBody";
import WeatherCardHead from "./WeatherCardHead";
import WeatherCardFooter from './WeatherCardFooter'
import '../../styles/WeatherCard.css'

export default function WeatherCard(){


    return(
        <section id="weatherCardContainer">
<WeatherCardHead/>
<WeatherCardBody/>
<WeatherCardFooter/>
        </section>
    )
}