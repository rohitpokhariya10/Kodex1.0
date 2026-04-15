import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div>
        {/* <h1>M</h1> */}
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout