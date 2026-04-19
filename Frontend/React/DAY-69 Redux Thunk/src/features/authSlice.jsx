import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
name :"authentication",
initialState:{
    user:null,
    isAuthenticated:false,
    isLoading : true
},
reducers:{
    addUser:(state , action)=>{
        state.user = action.payload//addUser(user ayega argument m) krte hi user set hojayega
        state.isAuthenticated = true
        state.isLoading = false
    },
    removeUser:(state)=>{
        state.user = null
        state.isAuthenticated = false
        state.isLoading = false
    }
}
})
console.log("authSlice-->", authSlice)
export let {addUser , removeUser } = authSlice.actions
export default authSlice.reducer