import React from "react";
import { Search } from "lucide-react";

const SearchContainer = ({ searchSongs }) => {
  console.log("searched songs-->", searchSongs);
  return (
    <div className="w-[380px] bg-[#121212] text-white rounded-lg shadow-xl p-3 absolute z-10">
      {/* Header */}
      <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
        <div className="flex items-center gap-2">
          <span className="border px-2 py-0.5 rounded text-xs">↑</span>
          <span className="border px-2 py-0.5 rounded text-xs">↓</span>
          <span>Navigate</span>
        </div>
        <span className="border px-2 py-0.5 rounded text-xs">Enter</span>
      </div>

      {/* Search Suggestions */}
      <div className="space-y-3">
        {searchSongs.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer"
          >
            <Search size={16} />
            <div className="flex gap-5 items-center">
              <img
                src={item.thumbnail}
                alt="song"
                className="w-10 h-10 rounded"
              />
              <p className="text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-3"></div>

    </div>
  );
};

export default SearchContainer;
