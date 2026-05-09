const mongoose = require("mongoose")


//Schema define
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true , "username already exist"],
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    email:{
        type:String,
        required:true,
        unique:[true , "email already exist"],
    }
})

//users --> collection name
//Create a model to perform  database operations on the users collection
const userModel = mongoose.model("users" , userSchema)

module.exports = userModel