import React from 'react'
import style from './VisitingCard.module.css'
import cameraShutter from '../assets/someElements/cameraShutter.svg'
import callSvg from '../assets/someElements/call.svg'
import locationSvg from '../assets/someElements/location.svg'
import globeSvg from '../assets/someElements/globe.svg'
import emailSvg from '../assets/someElements/email.svg'
import weddingCouple from '../assets/someElements/wedding couple.png'
import { Link } from 'react-router-dom'

const VisitingCard = () => {
  return (
    <div className={style.visitingCardDiv}>
        <div className={style.visitingCard}>
          <img className={style.logo} src="./Clicks Studio Logo.png" alt="" />
            <div className={style.grayBox}></div>
            <div className={style.orangeBox}></div>
            <div className={style.darkBlurBox}>
              <div className={style.studioNameDiv}>
                <img src={cameraShutter} alt="" />
                <h2 className={style.studioName}>Clicks Studio</h2>
              </div>
              <div className={style.contactDetails}>
                <div className={style.detailsLineSpan}></div>
                <div className={style.detailsHolderDiv}>
                  <span>
                    <a href='tel:+91 8252944229'>+91 8252944229</a>
                    <a href='tel:+91 6205441305'>+91 6205441305</a>
                  </span>
                  <img src={callSvg} alt="" />
                </div>
                <div className={style.detailsHolderDiv}>
                  <p>Chutia | Ranchi</p>
                  <img src={locationSvg} alt="" />
                </div>
                <div className={style.detailsHolderDiv}>
                  <p>clicks-studio.in</p>
                  <img src={globeSvg} alt="" />
                </div>
                <div className={style.detailsHolderDiv}>
                  <a href="mailto:clicksstudio.in@gmail.com">clicksstudio.in@gmail.com</a>
                  <img src={emailSvg} alt="" />
                </div>
              </div>
              <div className={style.pnges}>
                <img src={weddingCouple} alt="" />
              </div>
              <div className={style.serviceList}>
                  <h3>Services</h3>
                  <ul>
                    <li>Pre-wedding</li>
                    <li>Engagement</li>
                    <li>Wedding</li>
                    <li>Aniversary</li>
                    <li>Cinematography</li>
                    <li>Candid Photography</li>
                    <li>Traditional<br />Photography/Videography</li>
                    <li>Music-Album Shoot</li>
                    <li>& many more...</li>
                  </ul>
              </div>
            </div>
        </div>
      </div>
  )
}

export default VisitingCard
