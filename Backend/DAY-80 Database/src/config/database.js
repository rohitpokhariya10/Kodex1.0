const { mongoose } = require("mongoose")

let connectToDb = async () =>{
try{
   await mongoose.connect("mongodb://localhost:27017/day-80")
   console.log("Database connected")

}
catch(error){
    console.error("Database connection failed" , error)
}
}

module.exports = connectToDb