import React, { useState } from 'react'
import { Outlet } from 'react-router'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

const AuthLayout = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        {/* Condition Rendering.... */}
       {
           toggle ? <RegisterPage setToggle={setToggle}/> : 
           <LoginPage  setToggle={setToggle}/>
       }
    </div>
  )
}

export default AuthLayout