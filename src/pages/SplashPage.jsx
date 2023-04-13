
import React from 'react'
import logo from '../assets/logo.svg'
import styles from "./Splashpage.module.css"
import Swiper from '../components/Swiper'


function SplashPage() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo img" />
      <h2 className={styles.heading}>Where It’s @</h2>
      <p className={styles.paragraph}>Ticketing made easy</p>
      <Swiper/>
    </div>
  )
}

export default SplashPage
