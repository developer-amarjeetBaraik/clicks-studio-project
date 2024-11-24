import React from 'react'
import style from './SomeGlimpses.module.css'
import glimp1 from '../assets/someGlimpses/glimp1.mp4'
import glimp2 from '../assets/someGlimpses/glimp2.jpg'
import glimp3 from '../assets/someGlimpses/glimp3.jpg'
import glimp4 from '../assets/someGlimpses/glimp4.jpg'

const SomeGlimpses = () => {
  return (
    <ul className={style.glimpses}>
        <li className={style.glimp}><video controls className={style.videoGlimp} src={glimp1}></video></li>
        <li className={style.glimp}><img className={style.imageGlimp} src={glimp2} alt="" /></li>
        <li className={style.glimp}><img className={style.imageGlimp} src={glimp3} alt="" /></li>
        <li className={style.glimp}><img className={style.imageGlimp} src={glimp4} alt="" /></li>
        <li className={style.glimp}><video controls className={style.videoGlimp} src={glimp1}></video></li>
        <li className={style.glimp}><img className={style.imageGlimp} src={glimp2} alt="" /></li>
        <li className={style.glimp}><img className={style.imageGlimp} src={glimp3} alt="" /></li>
        <li className={style.glimp}><img className={style.imageGlimp} src={glimp4} alt="" /></li>
    </ul>
  )
}

export default SomeGlimpses
