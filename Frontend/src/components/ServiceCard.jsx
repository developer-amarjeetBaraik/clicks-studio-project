import React from 'react'
import style from './ServiceCard.module.css'

const ServiceCard = ({ service, imageURL }) => {
    console.log(service)
    return (
            <div className={style.card}>
                <h2 className={style.serviceName}>{service}</h2>
                <img className={style.serviceImage} src={`./${imageURL}`} alt="" />
                <div className={style.cardBtn}>
                    <button className={style.workBtn}>Our Work</button>
                    <button className={style.bookShootBtn}>Book Your Shoot</button>
                </div>
            </div>
    )
}

export default ServiceCard
