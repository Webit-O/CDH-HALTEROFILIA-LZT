import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Layout.css'

function Layout() {
  return (
    <>
      <div className="body-layout">        
        <Header className="header" />
        <Outlet className="outlet" />
        <Footer className="footer" />
      </div>
    </>
  )
}

export default Layout
