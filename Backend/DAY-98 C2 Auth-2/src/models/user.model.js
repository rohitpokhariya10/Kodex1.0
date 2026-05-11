const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        required:true,
        minlength:[8 , "password should be of minimum 8 length "],
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required : true,
    }
} ,{
    timestamps:true,
})

let userModel = mongoose.model("User" , userSchema)

module.exports = userModel