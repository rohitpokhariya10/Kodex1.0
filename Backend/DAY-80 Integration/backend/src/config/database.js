const mongoose = require("mongoose")

let connectToDb = async () =>{
 try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb database connected")

 }
 catch(error){
    console.error("MongoDb connection failed" , error)
 }
}

module.exports = connectToDb