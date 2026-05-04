// 1. Server Creation
//2. Configuration


// Server Creation
const express = require("express")
//app me express ka instance store karna (ab app server bangya hai)
const app = express()
 
app.use(express.json())

//Storage to store data
let users = []//YE ram ME CREATE HOTA H


// 1. Create Users
//HTTP Method : POST
//Route : http://localhost:3000/getUsers
app.post("/getUsers" , (req,res)=>{
 // console.log("rq.body -->" , req.body)
 users.push(req.body)

 return res.status(201).json({
    message:"Users created successfully",
    usersKaData: users
 })
})

//2. Read Users
//HTTP Method : GET
//Route : https://localhost:3000/users
app.get("/users" , (req,res)=>{
    return res.status(200).json({
        message:"Users fetched successfully",
        usersKaData:users
    })
})




//export app (jo ab server hai)
module.exports = app