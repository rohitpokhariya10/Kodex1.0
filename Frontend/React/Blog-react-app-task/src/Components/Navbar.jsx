import React, { useContext } from "react";
import { NavLink } from "react-router";
import { Auth } from "../Context/AuthContext";

const Navbar = () => {
  let { loggedInUser, user } = useContext(Auth);
  return (
    <header className="sticky top-0 z-30 border-b border-[#D8DEE8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3" to="/">
          <div className="flex h-10 w-10 items-center justify-center text-[#1A67AD]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 21h8"></path>
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            </svg>
          </div>
          <span className="text-[2rem] font-semibold tracking-[-0.04em] text-[#111111]">
            Inkwell
          </span>
        </NavLink>

        <nav className="flex items-center gap-3 sm:gap-4">
          {/* Agar user loggedin hai tuh Name show karo user ka else Login button */}
          {loggedInUser ? (
            <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-gray-100">
              {/* Avatar */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0056A4] text-white">
                {user?.name?.charAt(0)}
              </div>

              {/* Name */}
              <span className="hidden sm:inline">{user.name}</span>
            </button>
          ) : (
            <NavLink
              to="/auth/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#475569] transition hover:bg-[#F5F7FA] hover:text-[#111827]"
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/auth/register"
            className="rounded-lg px-4 py-2 text-sm font-semibold transition text-white bg-[#0056A4]"
             
            
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
