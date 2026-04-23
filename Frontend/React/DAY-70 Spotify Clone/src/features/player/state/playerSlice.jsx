import { createSlice, current } from "@reduxjs/toolkit";

let playerSlice = createSlice({
  name: "player",
  initialState: {
    isPlaying: false,
    currentPlayingSong: null,
    // this state is for forward backward feature
    songs: [],
    currentIndex: 0,
     // this state is for PlayList Feature
     playlistContainer:[],
     playlistCounter:1
  },
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload; //saare songs es state array pe ajayenge
      //console.log("Songs Redux State-->", state.songs)
    },
    playNewSong: (state, action) => {
      const song = action.payload;

      state.isPlaying = true;
      state.currentPlayingSong = song;

      //find index
      const index = state.songs.findIndex((s) => s.url === song.url);

      state.currentIndex = index; 
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },

    playNext: (state) => {
      if (state.currentIndex === null) return;
     // console.log("current Index i before playNext-->", state.currentIndex);

      let nextIndex = state.currentIndex + 1;
      if (nextIndex >= state.songs.length) nextIndex = 0; // loop
      state.currentIndex = nextIndex;
      //console.log("current Index i after playNext-->", state.currentIndex);
      state.currentPlayingSong = state.songs[nextIndex];
      state.isPlaying = true;
    },

    playPrev: (state) => {
      if (state.currentIndex === null) return;
      //console.log("current Index i before playPrev-->", state.currentIndex);

      let prevIndex = state.currentIndex - 1;

      if (prevIndex < 0) prevIndex = state.songs.length - 1; // loop
      state.currentIndex = prevIndex;
      //console.log("current Index i before playPrev-->", state.currentIndex);
      state.currentPlayingSong = state.songs[prevIndex];
      state.isPlaying = true;
    },
    addToPlayList:(state , action)=>{
      console.log("Playlist name-->" , action)
      const newPlaylist = {
        id:state.playlistCounter,
        name:`My Playlist #${state.playlistCounter}`
      }
      state.playlistContainer.push(newPlaylist)
      state.playlistCounter += 1

    }
  },
});

export let {
  playNewSong,
  pause,
  play,
  setSongs,
  currentIndex,
  playNext,
  playPrev,
  addToPlayList
} = playerSlice.actions;
export default playerSlice.reducer;
