import mongoose from "mongoose";
import bcrypt, { genSalt } from "bcryptjs";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        index:true,//for indexing
        required:true,
        unique:true,
    },
    email:{
        type:String,
        index:true,//for indexing
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    }
    
}, {timestamps:true});
//
userSchema.pre("save" , async function(){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , await bcrypt.genSalt(10));
    }
})
//
userSchema.methods.comparePassword = async function(newPassword){
    return await bcrypt.compare( newPassword , this.password );
}

const User = mongoose.model("users" , userSchema);
export default User;