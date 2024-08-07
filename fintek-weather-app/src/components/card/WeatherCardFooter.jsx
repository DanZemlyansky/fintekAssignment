import React from 'react';
import '../../styles/WeatherCardFooter.css'

export default function WeatherCardFooter(data) {
    return (
        <section id='weatherFooterContainer'>
            <div className='weatherSnippet'>
                <span className='weatherSnippetPrimary'>13:00</span>
                <span className='weatherSnippetSecondary'>19°C</span>
            </div>
        </section>
    );
}
