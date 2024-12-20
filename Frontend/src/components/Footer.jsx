import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import whatsapp from '../assets/whatsapp.svg'
import instagram from '../assets/instagram.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import Developer from './developer'

const Footer = () => {
  return (
    <div className={style.footerDiv}>
      <div className={style.links}>
        <h3>Important links</h3>
        <Link onClick={()=> window.scrollTo(0,0)} to='/services'>Services</Link>
        <Link onClick={()=> window.scrollTo(0,0)} to='/why-us'>Why us</Link>
        <Link onClick={()=> window.scrollTo(0,0)} to='/work-sample'>Work Sample</Link>
      </div>
      <div className={style.address}>
        <h2>Clicks Studio captures your precious moments</h2>
        <h3>Address</h3>
        <h5>Chutia | Ranchi</h5>
        <div className={style.socialIcons}>
          <Link target='_blank' to={'https://wa.me/918252944229?text=Hii i want to know more about the services and pricing'}><img src={whatsapp} alt="" /></Link>
          <Link target='_blank' to={'https://instagram.com/clicks_studio.in'}><img src={instagram} alt="" /></Link>
          <Link to={'tel:+91 8252944229'}><img src={phone} alt="" /></Link>
          <Link to={'mailto:clicksstudio.in@gmail.com?subject=Business inquiry&body=Hii i want to know more about the services and pricing'}><img src={email} alt="" /></Link>
        </div>
      </div>
      <div className={style.copyRight}>
        <p>Copywrite &copy; 2024 | <Link className={style.homeLink} to='/'>Clicks Studio&reg;</Link> All rights reserved | </p>
        <Developer />
      </div>
    </div>
  )
}

export default Footer 
