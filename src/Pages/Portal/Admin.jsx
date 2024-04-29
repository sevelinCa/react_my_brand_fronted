import React, { useEffect } from 'react'
import Navbar from '../../Components/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import '../../styles/admin/main.css'
import '../../styles/admin/loader.css'
import '../../styles/admin/responsive.css'

const Admin = () => {
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    if(!token){
      window.location.href='/signin'
      
    }
  })
  return (
    <div className='body' style={{width:'100%'}}>
        <Navbar/>
        <Outlet/>
      
    </div>
  )
}

export default Admin
