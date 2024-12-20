import React from 'react'
import style from './ServiceCard.module.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service, imageURL }) => {
    return (
        <div className={style.card}>
            <h2 className={style.serviceName}>{service}</h2>
            <img className={style.serviceImage} src={`./${imageURL}`} alt="" />
            <div className={style.cardBtn}>
                <Link onClick={() => window.scrollTo(0, 0)} to={'/work-sample'}><button className={style.workBtn}>Our Work</button></Link>
                <Link to={`https://wa.me/918252944229?text=Hii i want to book shoot for ${service}`}><button className={style.bookShootBtn}>Book Your Shoot</button></Link>
            </div>
        </div>
    )
}

export default ServiceCard
