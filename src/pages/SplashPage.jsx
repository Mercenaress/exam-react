import React from 'react';
import logo from '../assets/logo.svg';
import styles from './Splashpage.module.css';
import DotsContainer from '../components/DotsContainer';

function SplashPage() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo img" />
      <h2 className={styles.heading}>Where It’s @</h2>
      <p className={styles.paragraph}>Ticketing made easy</p>
      <DotsContainer
        firstDotActive={true}
        secondDotActive={false}
        thirdDotActive={false}
      />
    </div>
  );
}

export default SplashPage;
