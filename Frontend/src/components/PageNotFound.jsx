import React from 'react'
import style from './PageNotFound.module.css'
import PageNotFoundImage from '../assets/pageNotFoundImage.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className={style.bgDiv}>
      <h5 className={style.errorMessage}>404 Error</h5>
      <img className={style.pageNotFoundImage} src={PageNotFoundImage} alt="" />
      <Link className={style.homeLink} to={'/'}>Go to home page</Link>
    </div>
  )
}

export default PageNotFound
