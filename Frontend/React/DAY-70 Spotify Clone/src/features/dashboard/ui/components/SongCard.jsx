import React from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { playNewSong } from "../../../player/state/playerSlice";

const SongCard = ({ song }) => {
 let dispatch = useDashboard()
  return (
    <div className="w-[220px] bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition duration-300 group cursor-pointer">
      
      {/* Image */}
      <div className="relative">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-[180px] object-cover rounded-md"
        />

        {/* Play Button (UI only) */}
        <div 
        onClick={()=> dispatch(playNewSong(song))}
        className="absolute bottom-3 right-3 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
        transition duration-300 shadow-lg">
          ▶
        </div>
      </div>

      {/* Song Info */}
      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm truncate">
          {song.title}
        </h3>
        <p className="text-gray-400 text-xs truncate mt-1">
          {song.artist}
        </p>
      </div>
    </div>
  );
};

export default SongCard;