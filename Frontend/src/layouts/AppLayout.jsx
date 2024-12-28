import React from 'react'
import style from './AppLayout.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

  return (
    <div className={style.appLayoutDiv} onLoad={fetchToServer()}>
      <Header/>
      {/* Navbar */}
      <Navbar/>

      <Outlet/>
      
      <Footer/>
    </div>
  )
}

export default AppLayout
