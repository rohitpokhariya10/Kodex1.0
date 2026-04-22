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
import { useSelector } from "react-redux";

const Player = () => {
  let { togglePlayAndPause, isPlaying , currentPlayingSong , handleNext , handlePrev} = usePlayer();
  //console.log("current Playing Song -->" , currentPlayingSong)

  if(!currentPlayingSong) return

  return (
   <div className="h-20 w-full bg-[#181818] border-t border-[#282828] text-white px-4 py-3 flex items-center justify-between fixed bottom-0 left-0 right-0 z-50">
      {/* LEFT - SONG INFO */}
      <div className="flex items-center gap-3 w-1/4">
        <img
            src={currentPlayingSong.thumbnail
}
          alt="song"
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <h4 className="text-sm font-semibold">{currentPlayingSong.title}</h4>
          <p className="text-xs text-gray-400 overflow-auto">
          {currentPlayingSong.album}
          </p>
        </div>
        <button className="ml-2 text-gray-400 hover:text-white">＋</button>
      </div>

      {/* CENTER - CONTROLS */}
      <div className="flex flex-col items-center gap-2 w-2/4">
        {/* Controls */}
        <div className="flex items-center gap-4">
          <Shuffle size={18} className="text-gray-400 hover:text-white" />
          <SkipBack 
          onClick={handlePrev}
          size={18} className="text-gray-400 hover:text-white" />

          {/* Play Button */}
          <button
            onClick={togglePlayAndPause}
            className="bg-white text-black p-2 rounded-full hover:scale-105 transition"
          >
            {isPlaying ? (
              <Pause size={18} />
            ) : (
              <Play size={18} className="ml-[2px]" />
            )}
          </button>

          <SkipForward 
          onClick={handleNext}
          size={18} className="text-gray-400 hover:text-white" />
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
