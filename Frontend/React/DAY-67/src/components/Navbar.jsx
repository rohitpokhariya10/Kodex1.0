import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const baseStyle = "px-4 py-2 text-gray-300 hover:text-pink-400";
  const activeStyle = "text-white border-b-2 border-white";

  return (
    <nav className="flex justify-between items-center bg-gray-900 px-8 py-4">
      <h2 className="text-white text-xl font-bold">MyApp</h2>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : ""}`
          }
        >
          Shop
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;