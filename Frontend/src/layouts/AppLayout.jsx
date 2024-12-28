import React from 'react'
import style from './AppLayout.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

  const fetchToServer = ()=>{
    fetch('/api/',{
      method:'GET',
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

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
