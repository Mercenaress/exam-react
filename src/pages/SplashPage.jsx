import React from 'react'
import logo from '../assets/logo.svg'
import "../pages/Splashpage.css"
import Swiper from '../components/Swiper'

function SplashPage() {
  return (
    <div className='container'>
      <img src={logo} alt="logo img" />
      <h2 className='heading'>Where It’s @</h2>
      <p className='paragraph'>Ticketing made easy</p>
      <Swiper/>
    </div>
  )
}

export default SplashPage
