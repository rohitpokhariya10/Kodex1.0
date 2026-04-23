import { useEffect, useRef ,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play, playNext, playPrev } from "../state/playerSlice";

export let usePlayer = () => {
  let { currentPlayingSong, isPlaying } = useSelector((store) => store.player);

  let dispatch = useDispatch();

  let audioRef = useRef(new Audio());
  //console.log("audioRef-->", audioRef);

  //
  useEffect(() => {
  if (!currentPlayingSong) return;

  audioRef.current.pause(); // stop old

  audioRef.current.src = currentPlayingSong.url;

  //  FIX: play if already playing
  if (isPlaying) {
    audioRef.current.play().catch(() => {});
  }
  //reset old song progress
  setProgress(0);
  setCurrentTime(0);
  setDuration(0);
}, [currentPlayingSong]);


//
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
 
   const [progress, setProgress] = useState(0)
   const [currentTime, setCurrentTime] = useState(0)
   const [duration, setDuration] = useState(0)

   useEffect(()=>{
    if(!audioRef.current) return

    let updateProgress = () =>{
      let current = audioRef.current.currentTime
      //console.log("current Time" , current)
      let total = audioRef.current.duration

      setCurrentTime(current)
      setDuration(total)

      if(total){
        setProgress((current / total) * 100) //progress set kar rhe hai hye hai progress nikalne ka formulae
      }
    }
     audioRef.current.addEventListener("timeupdate" , updateProgress )

     return ()=>{
      audioRef.current.removeEventListener("timeupdate" , updateProgress )
     }
   } , [])

   //
   let formatTime = (time) => {
  if (!time) return "0:00";

  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);

  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};






  return { togglePlayAndPause  , isPlaying , currentPlayingSong , handleNext , handlePrev , currentTime , progress , duration , audioRef , formatTime};


};
