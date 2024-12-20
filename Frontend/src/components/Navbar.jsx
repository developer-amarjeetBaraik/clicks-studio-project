import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={style.navbarDiv}>
        <NavLink className='navBtn' to={'/'}>Home</NavLink>
        <NavLink className='navBtn' to={'/services'}>Services</NavLink>
        <NavLink className='navBtn' to={'/work-sample'}>Work Sample</NavLink>
        <NavLink className='navBtn' to={'/why-us'}>Why us</NavLink>
        <NavLink className='navBtn' to={'/contact-us'}>Contact us</NavLink>
    </ul>
  )
}

export default Navbar
