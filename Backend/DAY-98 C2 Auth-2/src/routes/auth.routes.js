const express = require("express")
const userModel = require("../models/user.model")

const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")




//
authRouter.post("/register" , async (req , res)=>{
 try{
    let {username , email , password} = req.body

    let isUserExist = await userModel.findOne({
        $or:[{username} , {email}]
    })

    console.log("isUserExist-->" , isUserExist)

    if(isUserExist){
        let field = isUserExist.username === username ? "Username" : "Email"
        return res.status(409).json({
            message:`${field} aready exist`
        })
    }

    let user = await userModel.create({
        username,
        email,
        password
    })

    let token = jwt.sign(
        {
            id:user._id,
            email:user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"11h"
        }
    )

    res.cookie("Jwt_token" , token)
    return res.status(201).json({
        message:"user registered successfully",
        token,
        user
    })
 }
 catch(error){
    console.error("Error in register route" , error)
    return res.status(500).json({
        message:"Internal server error"
    })
 }
})


//
authRouter.get("/protected" , (req , res)=>{
  console.log(req.cookies)
})






module.exports = authRouter