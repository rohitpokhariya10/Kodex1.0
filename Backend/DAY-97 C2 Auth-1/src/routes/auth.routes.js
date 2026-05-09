const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

const authRouter = express.Router();

//HTTP METHOD : POST
//route : /api/auth/register
authRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUserExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    console.log("isUserExist-->", isUserExist);

    //Agar user db me exist karta hoga
    if (isUserExist) {
      const field = isUserExist.email === email ? "Email" : "Username";

      return res.status(409).json({
        // success: true → operation successful
        //success: false → operation failed
        success: false,
        message: `${field} already exists`,
      });
    }
    //Agar user db me exist nhi karta then

    //1. Database me user ka data save kro
    const user = await userModel.create({
      username,
      email,
      password,
    });
     

    //2. Token generate karrhe hai user ke data ke sath + Secret key
    //jwt.sign(payload, secretKey, options)---> (object , string , object)
    //token ---> iske andar user ka data rhta hai jis user ne register kara hoga
    const token = jwt.sign(
      {
        id: user._id,
        email:user.email,
      },
    process.env.JWT_SECRET,
    {
          // expiresIn --> iska name yhi hota hai
          expiresIn:"1d"
    });

    res.cookie("JWT-TOKEN" ,token)

    return res.status(201).json({
      message: "User registered successfully",
      newUser: user,
      token:token
    });
  } catch (error) {
    console.error("Error->", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = authRouter;
