import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SharedContent from './shared/SharedContent'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SharedContent />
      <Footer />  
    </>
  )
}

export default Layout
