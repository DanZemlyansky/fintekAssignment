import '../../styles/WeatherCardHead.css'

export default function WeatherCardHead(){


    return(
        <section id='weatherHeadContainer'>
        <div id='weatherHeadLocation'>
            <h1 id='cityName'>Tel Aviv</h1>
            <h2 id='countryName'>Israel</h2>
        </div>
        <h3 id='weatherHeadDate'>13/2/2 at 16:00</h3>
        </section>
    )
}