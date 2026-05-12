const express = require("express");
const userModel = require("../models/user.model");
const authRouter = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Note:
// cookie-parser ko yaha import karne ki zarurat nahi hai.
// Isko main app.js/server.js file me use karna hota hai:
// app.use(cookieParser());

/*
|--------------------------------------------------------------------------
| Route: POST /api/auth/register
| Purpose:
| - New user ko register karna
| - Pehle check karna ki email already DB me exist karta hai ya nahi
| - Password ko hash karke save karna
| - User create hone ke baad JWT token generate karna
| - Token ko cookie me save karna taaki user logged-in rahe
|--------------------------------------------------------------------------
*/
authRouter.post("/register", async (req, res) => {
  try {
    // Request body se user ka data nikala
    let { username, email, password } = req.body;

    // Check karo ki same email se user pehle se registered hai ya nahi
    // Agar user milta hai to user ka data aayega, warna null aayega
    let userExist = await userModel.findOne({ email });

    // Agar email already DB me hai, to duplicate account create nahi karne dena
    if (userExist) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    // Password ko direct plain text me DB me save nahi karna chahiye
    // Isliye password ko hash me convert kar rahe hain
    // Note: MD5 industry-level secure nahi hai, bcrypt better hota hai
    let hash = crypto.createHash("md5").update(password).digest("hex");

    // New user ko database me create/save kar rahe hain
    let newUser = await userModel.create({
      username,
      email,
      password: hash,
    });

    // JWT token generate kar rahe hain
    // Token ke andar user ki id store kar rahe hain
    // Baad me isi id se user ko identify karenge
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      },
    );

    // Token ko browser cookie me save kar rahe hain
    // Isse next requests me browser automatically token bhej sakta hai
    res.cookie("token", token);

    // Successful response bhej rahe hain
    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in register route", error);

    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

/*
|--------------------------------------------------------------------------
| Route: GET /api/auth/get-me
| Purpose:
| - Currently logged-in user ka data fetch karna
| - Browser cookie se token lena
| - Token verify karna
| - Token ke andar stored user id se DB me user find karna
|
| Example:
| Agar user already login hai aur uske browser me valid token cookie me hai,
| to ye route us user ki details return karega.
|--------------------------------------------------------------------------
*/
authRouter.get("/get-me", async (req, res) => {
  try {
    // Cookie se token nikala
    // Ye token register/login ke time cookie me save kiya gaya tha
    let { token } = req.cookies;

    // Agar token cookie me nahi hai, iska matlab user logged-in nahi hai
    if (!token) {
      return res.status(401).json({
        message: "No user found",
      });
    }

    // Token ko verify kar rahe hain
    // Agar token valid hai, to decode ke andar user id milegi
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decode-->", decode);

    // Token ke andar jo user id thi, uske basis par DB se user find kar rahe hain
    const user = await userModel.findById(decode.id);

    console.log("user-->", user);

    // Agar token valid hai but DB me user nahi mila
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Logged-in user ka data response me bhej rahe hain
    return res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Error in get-me route", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

//POST
// /api/auth/login
authRouter.post("/login", async (req, res) => {
try{
    let {username , email, password } = req.body;
  //
  let isUserExist = await userModel.findOne({ 
    $or:[{username} , {email}]
   });
  console.log(isUserExist)
  //
  if (!isUserExist) {
    return res.status(401).json({
      message: "Invalid User",
    });
  }
  //
  let checkPassword = isUserExist.password === crypto.createHash("md5").update(password).digest("hex");
  console.log(isUserExist.password , crypto.createHash("md5").update(password).digest("hex"))
  if(!checkPassword){
    return res.status(401).json({
      message:"Invalid Password"
    })
  }
  //
  let token = jwt.sign(
    {
      id: isUserExist._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
  //
  res.cookie("token" , token);
  return res.status(200).json({
    message:"User loggedin successfully",
    // User:isUserExist
  })
}
catch(error){
  console.error("Error in login route" , error);
  return res.status(500).json({
    message:"Internal Server Error"
  })
}
});

module.exports = authRouter;
