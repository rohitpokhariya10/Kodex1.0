import express from "express"
import { User } from "../models/user.model.js"

export const userRouter = express()

// 1. Create
userRouter.post("/createUser" , async (req , res)=>{
   try{
     let {username , role , contact , email , password} = req.body

    if(!username || !role || !contact || !email || !password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    let newUser = await User.create({
        username,
        role,
        password,
        email,
        contact
    })

    return res.status(201).json({
        message:"User created successfully",
        user:newUser,
    })
   }
   catch(error){
      console.log("error->" , error)
    return res.status(500).json({
        message:"Internal Server Error"
    })
}
})




