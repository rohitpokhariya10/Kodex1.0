import React from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { useSelector } from "react-redux";
import PlaylistCard from "../components/PlaylistCard";



const LeftPanel = () => {
  let { setIsCreatePlaylist, isCreatePlaylist , handlePlaylist} = useDashboard();
 let {playlistContainer} = useSelector((store)=> store.player)
  

  return (
    <div className="w-[280px] bg-[#121212] h-screen p-2 font-sans overflow-visible">
      <div className="bg-[#1a1a1a] rounded-xl p-4 h-full overflow-visible">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#b3b3b3">
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z" />
            </svg>
            <span className="text-white text-[15px] font-bold tracking-tight">
              Your Library
            </span>
          </div>
          <div className="flex items-center gap-1 ">
            {/* Create Playlist button (+) */}
            <button
              onClick={() => setIsCreatePlaylist((prev) => !prev)}
              className="p-1.5 rounded-full text-[#b3b3b3] hover:bg-white/10 hover:text-white transition-all pr-5 "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z" />
              </svg>
            </button>
            {isCreatePlaylist && (
              <div 
              
              className="fixed top-[135px] left-[260px] bg-[#282828] p-2 rounded-md shadow-lg w-[250px] z-[9]">
                {/* Playlist Row */}
                <div 
                onClick={handlePlaylist}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 cursor-pointer">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#3e3e3e] flex items-center justify-center">
                    <svg
                      width="80"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H3a1 1 0 1 1 0-2h8V3a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-white text-sm font-semibold">Playlist</p>
                    <p className="text-gray-400 text-xs">
                      Create a playlist with songs or episodes
                    </p>
                  </div>
                </div>
              </div>
            )}
          
          </div>
        </div>

        {/* Filter Pill */}
        <div className="flex gap-2 mb-4">
          <button className="bg-white text-black text-[13px] font-semibold px-3.5 py-1.5 rounded-full">
            Playlists
          </button>
        </div>

        {/* Search & Sort Row */}
        <div className="flex items-center justify-between mb-3">
          <button className="p-1 text-[#b3b3b3] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5A5.25 5.25 0 0 0 7 1.75zm-6.75 5.25a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.28 13.13A6.75 6.75 0 0 1 .25 7z" />
            </svg>
          </button>
          <button className="flex items-center gap-1 pr-3 text-[#b3b3b3] text-[13px] font-medium hover:text-white transition-colors">
            Recents
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 4h12v1.5H2V4zm2 3h8v1.5H4V7zm3 3h2v1.5H7V10z" />
            </svg>
          </button>
        </div>

        {/* Liked Songs Item */}
        <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-white/10 transition-colors">
          {/* Artwork */}
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#450af5] to-[#c4efd9] flex-shrink-0 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">
              Liked Songs
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#1ed760">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span className="text-[#b3b3b3] text-xs">Playlist • 1 song</span>
            </div>
          </div>
        </div>
         {/*Dynamic  Playlist */}
          <div>
            {
              playlistContainer.map((playlist , index)=>{
              return <PlaylistCard playlist={playlist} key={index}/>
            })
            }
          </div>
      </div>
    </div>
  );
};

export default LeftPanel;
