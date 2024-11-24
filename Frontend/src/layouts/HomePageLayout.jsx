import React, { lazy, Suspense } from 'react'
import style from './HomePageLayout.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const LazyLoadSomeGlampses = lazy(()=> import('../components/SomeGlimpses'))

const HomePageLayout = () => {
  return (
    <div className={style.appLayoutDiv}>
      <Header/>
      {/* Navbar */}
      <Navbar/>
      <HeroSection/>
      <h2 className={style.servicesHeading}>Services we offer</h2>
      <div className={style.servicesSection}>
          <div className={style.setviceCards}>
            <Services/>
          </div>
          <div className={style.form}>
            <ContactForm/>
          </div>
      </div>
      <h2 className={style.glimpsHeading}>Some Glimpses</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadSomeGlampses/>
      </Suspense>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default HomePageLayout
