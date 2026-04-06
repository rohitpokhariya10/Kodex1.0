import { useRef } from "react"

//This is an real world usecase of useRef() hook
const Audioplayer = () => {
    let audioRef = useRef()
    console.log(audioRef)
  return (
    <div>
      <audio 
      src="public\Jogi.mp3"
      ref={audioRef}
      >
  
      </audio>

      <button 
      onClick={()=>{audioRef.current.play()
        console.log("clicked")
      }}
      className="p-3 px-[30px] bg-blue-600 rounded-xl text-md">
        Play</button>


    
    </div>
  )
}

export default Audioplayer
