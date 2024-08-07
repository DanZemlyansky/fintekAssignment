import React from 'react';
import '../../styles/WeatherCardFooter.css';
import { useWeatherContext } from '../../WeatherContext';

export default function WeatherCardFooter() {
    const { forecastData } = useWeatherContext();

    if (!forecastData) {
        return null; 
    }

const forecast = forecastData.forecast

    return (
        <section id='weatherFooterContainer'>
            {forecast.map((hour, index) => (
                <div key={index} className='weatherSnippet'>
                    <span className='weatherSnippetPrimary'>{hour.time.slice(11, 16)}</span>
                    <span className='weatherSnippetSecondary'>{Math.round(hour.temp_c)}°C</span>
                </div>
            ))}
        </section>
    );
}
