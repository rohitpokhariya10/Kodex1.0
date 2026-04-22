import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play, playNext, playPrev } from "../state/playerSlice";

export let usePlayer = () => {
  let { currentPlayingSong, isPlaying } = useSelector((store) => store.player);

  let dispatch = useDispatch();

  let audioRef = useRef(new Audio());
  //console.log("audioRef-->", audioRef);

  useEffect(() => {
  if (!currentPlayingSong) return;

  audioRef.current.pause(); // stop old

  audioRef.current.src = currentPlayingSong.url;

  //  FIX: play if already playing
  if (isPlaying) {
    audioRef.current.play().catch(() => {});
  }
}, [currentPlayingSong]);



  useEffect(() => {
    if (!currentPlayingSong) return;

    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);


  //dispatch is a sideEffect
  let togglePlayAndPause = () => {
    if (isPlaying) {
      //console.log(isPlaying);
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

     //  NEW FUNCTIONS TO HANDLE FORWARD & BACKWARD
  let handleNext = () => {
    dispatch(playNext());
  };

  let handlePrev = () => {
    dispatch(playPrev());
  };
  return { togglePlayAndPause  , isPlaying , currentPlayingSong , handleNext , handlePrev};


};
