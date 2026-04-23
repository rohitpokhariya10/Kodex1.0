import React from "react";
import { useSelector } from "react-redux";

const RightPanel = () => {

  let { currentPlayingSong } = useSelector((store) => store.player);
  console.log("Current Playing Song in RP-->", currentPlayingSong);
  if (!currentPlayingSong) return;

  return (
    <div className="text-white flex flex-col gap-6 p-4">

      {/* Song Image */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
        <img
          src={currentPlayingSong.thumbnail}
          alt="song"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Song Details */}
      <div className="flex flex-col gap-1 px-1">
        <h2 className="text-xl font-bold tracking-tight truncate">
          {currentPlayingSong.title}
        </h2>

        <p className="text-sm font-medium text-gray-300 truncate">
          {currentPlayingSong.artist}
        </p>

        <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
          {currentPlayingSong.album}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 rounded-full" />

    </div>
  );
};

export default RightPanel;