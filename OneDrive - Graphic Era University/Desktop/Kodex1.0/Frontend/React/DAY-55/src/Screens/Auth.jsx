import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div>
      Authentication

      {/* Outlet me Auth.jsx ke Nested child component ayenge Login.jsx / Register.jsx*/}
      <Outlet/>
    </div>
  )
}

export default Auth
