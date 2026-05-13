const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let userSchema = new mongoose.Schema({
    username:{
        type : String,
        trim : true,
    },
    email:{
        unique : true,
        required : [true , "Email is required"],
        type : String,
        trim:true,
    },
    password :{
         required : [true , "Password is required"],
        type : String,
        trim:true,

    },
    mobile:{
        type:String,
        trim:true,
    }
},
{
    timestamps : true,
})
//FLOW OF Pre Method
// userModel.create()
//         ↓
// Mongoose ek user document banata hai
//         ↓
// save hone se pehle pre("save") chalega
//         ↓
// password hash hoga
//         ↓
// hashed password database me save hoga
//1. Pre method
userSchema.pre("save" , async function(){
    //this ka matlab current user document hai.
    //this.password = userSchema ki password field
    //10 --> number of salts
    //bcrypt( ) method return promise thats why we use async await
this.password = await bcrypt.hash(this.password , 10)
})

//2. methods
//generateJWT ek reusable function hai jo user schema ke through har user document ke saath attach ho jata hai, taaki tumhe baar-baar controller me jwt.sign() ka same code nahi likhna pade.

// userSchema ke andar generateJWT naam ka custom instance method add kiya hai.
// Ye method har User document/object par available hoga, jo User model se create ya fetch hoga.
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      id: this._id, // current user document ki _id payload me store kar rahe hain
    },
    process.env.JWT_SECRET, // token sign karne ke liye secret key
    {
      expiresIn: "1d", // token 1 din me expire ho jayega
    }
  );
};

//3. methods
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password , this.password);
}
let userModel = mongoose.model("Users" , userSchema);

module.exports = userModel;