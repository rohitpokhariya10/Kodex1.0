import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../state/playerSlice";

export let usePlayer = () => {
  let { currentPlayingSong, isPlaying } = useSelector((store) => store.player);

  let dispatch = useDispatch();

  let audioRef = useRef(new Audio());
  console.log("audioRef-->", audioRef);

  useEffect(() => {
    if (!currentPlayingSong) return;
    console.log("currentPlayingSong-->", currentPlayingSong);

    //src = url
    audioRef.current.src = currentPlayingSong.url;
    audioRef.current.play();
  }, [currentPlayingSong]);



  useEffect(() => {
    if (!currentPlayingSong) return;

    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);


  //dispatch is a sideEffect
  let togglePlayAndPause = () => {
    if (isPlaying) {
      console.log(isPlaying);
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };
  return { togglePlayAndPause };


};
