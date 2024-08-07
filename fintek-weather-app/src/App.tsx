import { useState } from 'react'
import './App.css'
import HeroContainer from './components/containers/HeroContainer'
import CardContainer from './components/containers/CardContainer'
import { WeatherProvider } from './WeatherContext'
const  App: React.FC = () => {

  return (
    <WeatherProvider>
    <section id='appContainer'>
    <HeroContainer/>
    <CardContainer/>
    </section>
    </WeatherProvider>
  )
}

export default App
