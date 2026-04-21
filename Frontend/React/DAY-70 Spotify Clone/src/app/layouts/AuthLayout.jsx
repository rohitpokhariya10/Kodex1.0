import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className=' bg-amber-950 '>
        <Outlet/>
    </div>
  )
}

export default AuthLayout