import React from 'react'
import style from './ServicesPageLayout.module.css'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'

const ServicesPageLayout = () => {
  return (
    <div className={style.servicesLayoutDiv}>
      <h3>These are the services we offer</h3>
      <Services/>
      <ContactForm/>
    </div>
  )
}

export default ServicesPageLayout
