import React from 'react'
import style from './Services.module.css'
import ServiceCard from './ServiceCard'

const servicesData = [
    {
        service: "Pre-wedding",
        imageURL: "pre-wedding.svg"
    },
    {
        service: "Engagement",
        imageURL: "engagement.svg"
    },
    {
        service: "Wedding",
        imageURL: "wedding.svg"
    },
    {
        service: "Aniversary", 
        imageURL: "aniversary.svg"
    },
    {
        service: "Cinematography",
        imageURL: "cinematography.svg"
    },
    {
        service: "Candid Photography",
        imageURL: "candid-photography.svg"
    },
    {
        service: "Traditional Photography /Videography",
        imageURL: "traditional-photography-videography.svg"
    },
    {
        service: "Music-Album Shoot",
        imageURL: "music-album-shoot.svg"
    },
]
const Services = () => {
    return (
        <ul className={style.cardList}>
            {
                servicesData.map(item => {
                   return <li key={item.service} className={style.card}><ServiceCard service={item.service} imageURL={item.imageURL} /></li>
                })
            }
        </ul>
    )
}

export default Services
