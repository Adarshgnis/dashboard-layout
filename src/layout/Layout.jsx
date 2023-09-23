import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="main-section">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout