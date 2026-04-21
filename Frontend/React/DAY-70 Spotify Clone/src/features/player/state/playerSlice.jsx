import { createSlice } from "@reduxjs/toolkit";

let playerSlice = createSlice({
    name:"player",
    initialState:{
        isPlaying:false,
        currentPlayingSong:null
    },
    reducers:{
        playNewSong:(state,action)=>{
         state.isPlaying = true
         console.log("Action-->" , action)
         state.currentPlayingSong = action.payload
        },
        play:(state)=>{state.isPlaying = true},
        pause:(state)=>{
            state.isPlaying = false
        }
    }
})

export let {playNewSong , pause , play} = playerSlice.actions
export default playerSlice.reducer
