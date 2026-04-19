import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export let loginUser = createAsyncThunk("auth/login" ,async (data , thunkAPI)=>{
 try{
        const res = await axios.post("https://dummyjson.com/auth/login", data);
        //console.log("Logged In User Data", res.data);
        localStorage.setItem("accessToken" , res.data.accessToken)//store user login accessToken in localStorage
        alert(`${res.data.firstName} successfully loggedin`)
        return res
 }
 catch(error){
    return thunkAPI.rejectWithValue("Login Error" , error)
 }
})