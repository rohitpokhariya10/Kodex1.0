import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        // I have to explore more...
          match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
          trim:true,
          unique:true,
    },
    password:{
         type:String,
        required:true,
        minlength:8,
    },
    contact:{
        type:String,
        required:true,
        unique:true,
    }
    ,role:{
        type:String,
        enum:["Admin" , "Manager" , "Majdur"],
        required:true
    }

},
{
    timestamps:true,
})


export const User = mongoose.model("Users" , userSchema)