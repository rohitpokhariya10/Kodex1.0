import React from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
} from "lucide-react";
import { usePlayer } from "../../hooks/usePlayer";

const Player = () => {
  let {togglePlayAndPause} = usePlayer()
  
  return (
    <div className="h-15 w-full bg-black text-white px-4 py-3 flex items-center justify-between">
      
      {/* LEFT - SONG INFO */}
      <div className="flex items-center gap-3 w-1/4">
        <img
        //   src="https://i.scdn.co/image/ab67616d00004851c0f537c2b1e2f6c4d9f4c8b6"
          alt="song"
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <h4 className="text-sm font-semibold">Sanam Teri Kasam</h4>
          <p className="text-xs text-gray-400">
            Himesh Reshammiya, Ankit Tiwari, Palak Muchhal
          </p>
        </div>
        <button className="ml-2 text-gray-400 hover:text-white">＋</button>
      </div>

      {/* CENTER - CONTROLS */}
      <div className="flex flex-col items-center gap-2 w-2/4">
        
        {/* Controls */}
        <div className="flex items-center gap-4">
          <Shuffle size={18} className="text-gray-400 hover:text-white" />
          <SkipBack size={18} className="text-gray-400 hover:text-white" />

          {/* Play Button */}
          <button 
          onClick={()=> togglePlayAndPause()}
          className="bg-white text-black p-2 rounded-full">
            <Pause  size={18} />
          </button>

          <SkipForward size={18} className="text-gray-400 hover:text-white" />
          <Repeat size={18} className="text-gray-400 hover:text-white" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-gray-400">0:00</span>

          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-[20%] h-full bg-white"></div>
          </div>

          <span className="text-xs text-gray-400">5:14</span>
        </div>
      </div>

      {/* RIGHT - VOLUME */}
      <div className="flex items-center gap-3 w-1/4 justify-end">
        <Volume2 size={18} className="text-gray-400" />

        <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-[60%] h-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;