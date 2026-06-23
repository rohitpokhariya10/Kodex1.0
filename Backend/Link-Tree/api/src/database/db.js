import mongoose from "mongoose";
import env from "../config/env.js";
import ApiError from "../utils/ApiError.js";
async function connectToDb(){
    try{
        await mongoose.connect(env.MONGO_URI);
        console.log("MongoDb connected")
    }
    catch(error){
        console.log("MogoDb connection failed" , error);
        throw new ApiError("MongoDb connection failed");
    }

}
export default connectToDb;
