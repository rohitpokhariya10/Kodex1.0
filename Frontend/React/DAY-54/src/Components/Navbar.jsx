import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-[10%] bg-black text-white flex items-center justify-around'>
      <h1>Logo</h1>

      <div className='flex gap-7'>
      <NavLink
      className={(data)=> data.isActive === true ? "border-b-4 border-red-800" :" "}
      to="/home">Home</NavLink>

     <NavLink
      className={(data)=> data.isActive === true ? "border-b-4 border-red-800" :" "}
      to="/about">About</NavLink>

  <NavLink
    className={(data)=> data.isActive === true ? "border-b-4 border-red-800" :" "}
      to="/contact">Contact</NavLink>

     <NavLink
      className={(data)=> data.isActive === true ? "border-b-4 border-red-800" :" "}
      to="/product">Product</NavLink>

      </div>
      <button className='border-2 border-r-white px-4 py-2 rounded-md'> Sign Up</button>
    </div>
  )
}

export default Navbar
