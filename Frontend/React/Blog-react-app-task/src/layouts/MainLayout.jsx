import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../Components/Navbar"

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-transparent'>
      <Navbar/>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent' />
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
