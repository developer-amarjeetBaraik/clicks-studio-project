import React, { lazy, Suspense } from 'react'
import style from './HomePageLayout.module.css'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import HandleFormContext from '../store/HandleFormContext'

const LazyLoadSomeGlampses = lazy(()=> import('../components/SomeGlimpses'))

const HomePageLayout = () => {
  return (
    <div className={style.appLayoutDiv}>
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
    </div>
  )
}

export default HomePageLayout
