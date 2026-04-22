import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allSongs } from "../api/songsApi";
import { setSongs } from "../../player/state/playerSlice";

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

  return {
    
    loadMore,
    visibleCount,
    dispatch
  }
};
