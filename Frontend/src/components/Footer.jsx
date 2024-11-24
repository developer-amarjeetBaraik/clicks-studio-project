import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import VisitingCard from './VisitingCard'

const Footer = () => {
  return (
    <div className={style.footerDiv}>
      <div className={style.links}>
        <h3>Important links</h3>
        <Link to='/services'>Services</Link>
        <Link to='/why-us'>Why us</Link>
        <Link to='/work-sample'>Work Sample</Link>
      </div>
      <VisitingCard/>
      <div className={style.address}>
        <h2>Clicks Studio captures your precious moments</h2>
        <h3>Address</h3>
        <h5>Chutia | Ranchi</h5>
        <div className={style.socialIcons}>
            <Link><img src={whatsapp} alt="" /></Link>
            <Link><img src={instagram} alt="" /></Link>
            <Link><img src={phone} alt="" /></Link>
            <Link><img src={email} alt="" /></Link>
        </div>
      </div>
      <div className={style.copyRight}>
      <p>Copywrite &copy; 2024 | <Link className={style.homeLink} to='/'>Clicks Studio&reg;</Link> All rights reserved | Developer Amarjeet </p>
      </div>
    </div>
  )
}

export default Footer
