import React from "react";
import { Home, Search, Download } from "lucide-react";
import SearchInput from "../../../search/ui/components/SearchInput";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-3 flex items-center justify-between">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt="logo"
          className="w-8"
        />

        {/* Home Icon */}
        <div className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 cursor-pointer">
          <Home size={20} />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-neutral-800 px-4 py-2 rounded-full w-[350px] ">
         <SearchInput  placeholder="Enter a song"  type="text"/>
         
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6 text-sm">
        
        <span className="text-gray-300 hover:text-white cursor-pointer">
          Premium
        </span>
        <span className="text-gray-300 hover:text-white cursor-pointer">
          Support
        </span>
        <span className="text-gray-300 hover:text-white cursor-pointer">
          Download
        </span>

        {/* Divider */}
        <div className="h-5 w-px bg-gray-600"></div>

        {/* Install App */}
        <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
          <Download size={16} />
          Install App
        </div>

        <span className="text-gray-300 hover:text-white cursor-pointer">
          Sign up
        </span>

        {/* Login Button */}
        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;