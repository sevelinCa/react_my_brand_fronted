import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Guest/Navbar'
import Footer from '../../Components/Guest/Footer'
import "../../styles/Guest/responsiveness.css"
import "../../styles/Guest/main.css"
import "../../styles/admin/main.css"
import "../../styles/Guest/aboutus.css"
import "../../styles/Guest/portfolio.css"


const Guest = () => {
  return (
    <div >
        <Navbar/>

        <Outlet/>

        <Footer/>
      
    </div>
  )
}

export default Guest
