import React from 'react'
import { Outlet } from 'react-router'
import { AuthProvider } from '../context/AuthContext'

const AuthLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AuthLayout
