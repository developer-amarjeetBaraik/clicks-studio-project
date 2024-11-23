import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={style.navbarDiv}>
        <Link className={style.active} to='/'>Home</Link>
        <Link className={style.active} to='/services'>Services</Link>
        <Link className={style.active} to='/work-sample'>Work Sample</Link>
        <Link className={style.active} to='/why-us'>Why us</Link>
        <Link className={style.active} to='/contact-us'>Contact us</Link>
    </ul>
  )
}

export default Navbar
