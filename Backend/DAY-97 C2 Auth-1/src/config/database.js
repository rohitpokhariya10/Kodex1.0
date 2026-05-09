const mongoose = require("mongoose")

let connectToDb =  async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to DB")
    }
    catch(error){
        console.log("MongoDb connection failed", error)
    }
}
module.exports = connectToDb