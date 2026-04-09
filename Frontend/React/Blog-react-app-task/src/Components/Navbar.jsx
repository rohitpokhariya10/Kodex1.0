import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
  <div className="flex h-16  items-center justify-around px-[80px] border-b-1 border-gray-300">
  <NavLink className="flex items-center gap-2" to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pen-line h-6 w-6 text-primary"
      aria-hidden="true"
    >
      <path d="M13 21h8"></path>
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
    </svg>
    <span className="text-xl font-semibold tracking-tight">Inkwell</span>
  </NavLink>

  <nav className="flex items-center gap-2">
    <button
      
      className="hover:bg-green-800 px-3 py-2 hover:text-white hover:rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
      </svg>
    </button>

    <div className="flex items-center gap-4">
     <NavLink
     to="/login"
     className="hover:bg-green-800 px-3 py-2 hover:text-white hover:rounded-md"
     >
      Login
     </NavLink>
      

      <NavLink
      to="/register"
      className="px-3 py-2 bg-[#1966AC] rounded-md text-white font-semibold"
      >
        Sign Up
      </NavLink>
    </div>
  </nav>
</div>
   
  )
}

export default Navbar
