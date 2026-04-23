import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allSongs } from "../api/songsApi";
import { addToPlayList, setSongs } from "../../player/state/playerSlice";

export let useDashboard = () => {
  let dispatch = useDispatch();

  useEffect(()=>{
   const allSongsData = allSongs();
 // console.log("All Songs Data-->", allSongsData);
 dispatch(setSongs(allSongsData))

  }, [])
  const [visibleCount, setVisibleCount] = useState(20);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const [isCreatePlaylist, setIsCreatePlaylist] = useState(false)
  
  let handlePlaylist=()=>{
    dispatch(addToPlayList())
  }
  return {
    
    loadMore,
    visibleCount,
    setIsCreatePlaylist,
    isCreatePlaylist,
    handlePlaylist,
    dispatch
  }
};
