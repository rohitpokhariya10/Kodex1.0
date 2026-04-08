import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-[100%] w-[100%]'>
     <Navbar/>

   <div className='p-4'>
    <Outlet/>
   </div>
    </div>
  )
}

export default MainLayout
