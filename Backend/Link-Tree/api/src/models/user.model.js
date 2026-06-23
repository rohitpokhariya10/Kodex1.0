import mongoose from "mongoose";
import bcrypt from "bcrypt";
import AppError from "../utils/ApiError.js";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    refreshToken:{
        type:String,
        select:false,
    },
},{timestamps:true});

//
userSchema.pre("save" , async function(){
if(!this.isModified("password")){
return;
}
try{
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
}
catch(error){
    console.error("Error in password hashing" , error.message);
    throw new AppError("Error in password hashing");
}
})
//
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password);
}

const User = mongoose.model("users" , userSchema);
export default User;
