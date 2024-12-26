import React from 'react'
import style from './HeroSection.module.css'
// import HeroSectionVideo from '../assets/HeroSectionVideo.mp4'

const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      {/* <video className={style.heroVideo} autoPlay muted loop src={HeroSectionVideo}></video> */}
      <div className={style.videoOverlay}>
        <h1>Clicks Studio: Capturing Moments, Creating Stories</h1>
        <h3>Where Every Frame Speaks a Thousand Words</h3>
        <h5>Crafting Visual Magic for Your Special Moments.</h5>
        <button>Book Your Shoot Today</button>
      </div>
    </div>
  )
}

export default HeroSection
