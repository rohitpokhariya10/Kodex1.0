import mongoose from "mongoose";
import env from "./env.js";

async function connectToDb(){
    try{
        await mongoose.connect(env.MONGO_URI);
        console.log("MongoDb connected successfully");
    }
    catch(error){
        console.error("MongoDb connection failed" , error);
        process.exit(1);
    }
}
export default connectToDb;