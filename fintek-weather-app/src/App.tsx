import { useState } from 'react'
import './App.css'
import HeroContainer from './components/containers/HeroContainer'
import CardContainer from './components/containers/CardContainer'
function App() {

  return (
    <section id='appContainer'>
    <HeroContainer/>
    <CardContainer/>
    </section>
  )
}

export default App
