import React from 'react'
import Headers from './components/Headers/Headers'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
  <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
 
  )
}

export default Layout