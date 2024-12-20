import React from 'react'
import style from './ContactUsPageLayout.module.css'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const ContactUsPageLayout = () => {
  return (
    <div className={style.contactUsPageLayoutDiv}>
      <h3>You can call us on <Link to={'tel:+91 8252944229'}>+91 8252944229</Link> or fill the form so that we can call you</h3>
      <ContactForm/>
    </div>
  )
}

export default ContactUsPageLayout
