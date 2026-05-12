const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const authRouter = express.Router();

// Register new user
authRouter.post("/register", async (req, res) => {
  try {
    // Get data from request body
    let { username, email, password } = req.body;

    // Check username or email already exists
    let isUserExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    console.log("isUserExist-->", isUserExist);

    // If user already exists, return conflict error
    if (isUserExist) {
      let field = isUserExist.username === username ? "Username" : "Email";

      return res.status(409).json({
        message: `${field} already exists`,
      });
    }
    

    //convert password into hash
    let hash = crypto.createHash("md5").update(password).digest("hex")
    // Create new user
    let user = await userModel.create({
      username,
      email,
      password:hash,
    });

    // Create JWT token
    let token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "11h",
      }
    );

    // Send token in cookie
    res.cookie("Jwt_token", token);

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    console.error("Error in register route", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Protected route
authRouter.get("/protected", (req, res) => {
  // Read cookies from request
  console.log(req.cookies);

  return res.status(200).json({
    message: "Protected route working",
    cookies: req.cookies,
  });
});

//2. login route-->/api/auth/login
authRouter.post("/login" , async (req,res)=>{
  try{
    let {username , email , password} = req.body;

  let userExist = await userModel.findOne({
    $or:[{email},{username}]
  })
  //if user ne register nhi kara hoga
  if(!userExist){
    return res.status(404).json({
      message:"User not found"
    })
  }
  //bcrypt.compare(normalPassword, hashedPassword)
  let checkUserPassword = userExist.password === crypto.createHash("md5").update(password).digest("hex")

  if(!checkUserPassword){
    return res.status(401).json({
      message:"Invalid Password"
    })
  }

  const token = jwt.sign(
    {
      id:userExist._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn :"1h"
    }
  )
   
  res.cookie("Jwt_token" , token)
  return res.status(200).json({
    message:"User logined successfully",
    
  })
  }
  catch(error){
    console.error("Error in login route --->" , error)
    return res.status(500).json({
      message:"Internal server error"
    })
  }
})

module.exports = authRouter;