import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'


const Header = () => {
    return ( 
        <div className={style.headerDiv}>
            <Link className={style.homeLink} to='/'><img className={style.logo} src="./Clicks Studio Logo.png" alt="Clicks Studio logo" /></Link>
            <div className={style.phoneNumberDiv}>
            <img src="./india.png" alt="" />
            <a href="tel:+91 8252944229">+91 8252944229</a>
            </div>
        </div>
    )
}

export default Header
