import React from 'react'
import style from './Services.module.css'
import ServiceCard from './ServiceCard'

const servicesData = [
    {
        service: "Pre-wedding",
        imageURL: "pre-wedding.png"
    },
    {
        service: "Engagement",
        imageURL: "engagement.svg"
    },
    {
        service: "Wedding",
        imageURL: ""
    },
    {
        service: "Aniversary",
        imageURL: ""
    },
    {
        service: "Cinematography",
        imageURL: ""
    },
    {
        service: "Candid Photography",
        imageURL: ""
    },
    {
        service: "Traditional Photography /Videography",
        imageURL: ""
    },
    {
        service: "Music-Album Shoot",
        imageURL: ""
    },
]
const Services = () => {
    return (
        <ul className={style.cardList}>
            {
                servicesData.map(item => {
                   return <li className={style.card}><ServiceCard service={item.service} imageURL={item.imageURL} /></li>
                })
            }
        </ul>
    )
}

export default Services
