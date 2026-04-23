import React from "react";
import { useNavigate } from "react-router";

const PlaylistCard = ({ playlist }) => {
    console.log("playlist-->" , playlist)
    let navigate = useNavigate()
  return (
    <div
    onClick={()=> navigate(`/dashboard/${playlist.id}`)}
    className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-white/10 transition-all group">
      
      {/* Thumbnail */}
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-md">
        🎵
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold truncate">
          {playlist.name}
        </p>
        <p className="text-gray-400 text-xs">
          Playlist
        </p>
      </div>

      {/* Hover Icon */}
      <div className="opacity-0 group-hover:opacity-100 transition-all">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      
    </div>
  );
};

export default PlaylistCard;