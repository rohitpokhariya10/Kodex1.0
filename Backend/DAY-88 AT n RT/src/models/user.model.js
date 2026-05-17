const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // Do not return password when fetching user data.
    },
    refreshToken: {
      type: String,
      default: "",
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// pre("save") runs automatically before a user is saved in MongoDB.
// Use normal function here because we need "this" as the current user document.
userSchema.pre("save" , async function(){
    // isModified("password") checks if password is new or changed.
    // If password is not changed, do not hash it again.
    if(!this.isModified("password")){
        return ;
    }

    // Hash plain password before saving it in the database.
    this.password = await bcrypt.hash(this.password , 10);
  
});

// Schema methods add custom functions to each user document.
// This checks entered password with saved hashed password.
userSchema.methods.comparePassword = async function(password){
return await bcrypt.compare(password , this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;
