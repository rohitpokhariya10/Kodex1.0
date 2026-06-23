import mongoose from "mongoose";
import User from "./user.model.js";

const linkSchema = new mongoose.Schema({
    user:{
       type:mongoose.Schema.Types.ObjectId,
       refer:'User',
       required:true,
    },
    title:{
        type:String,
        required:true
    },
    url:{
           type:String,
        required:true,
        unique:[true , "url should be unique"]
    },
    clickS:{
        type:Number,
        default:0,
    },


}, {timestamps:true});

const Link = mongoose.model("links" , linkSchema);
export default Link;