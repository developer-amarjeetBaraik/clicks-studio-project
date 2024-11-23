import React from 'react'
import style from './HomePageLayout.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'

const HomePageLayout = () => {
  return (
    <div className={style.appLayoutDiv}>
      <Header/>
      {/* Navbar */}
      <Navbar/>
      <HeroSection/>
      <div className={style.servicesSection}>
          <div className={style.setviceCards}>
            <Services/>
          </div>
          <div className={style.form}>

          </div>
      </div>
    </div>
  )
}

export default HomePageLayout
