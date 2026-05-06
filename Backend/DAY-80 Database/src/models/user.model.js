const mongoose = require("mongoose")

// Create Schema of users
// timestamps : true ---> data  kab create hua and kab update hua vo pata chal jayega 
let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
}, {
    timestamps : true
})

//Create a user model
// let User = mongoose.model("users-idhar-hai" , userSchema , "mama")//mama is the collection name isme s nhi ayga

let User = mongoose.model("users-idhar-hai" , userSchema)

//export user model
module.exports = User