import '../../styles/WeatherCardHead.css'
import { useWeatherContext } from '../../WeatherContext'

export default function WeatherCardHead(){
    const { forecastData } = useWeatherContext();
  
    if (!forecastData) {
      return null; 
    }
      
  const lastUpdated = forecastData.current.last_updated;
  const [date, time] = lastUpdated.split(' ');


    return(
        <section id='weatherHeadContainer'>
        <div id='weatherHeadLocation'>
            <h1 id='cityName'>{forecastData.location.name}</h1>
            <h2 id='countryName'>{forecastData.location.country}</h2>
        </div>
        <h3 id='weatherHeadDate'>{date} at {time}</h3>
        </section>
    )
}