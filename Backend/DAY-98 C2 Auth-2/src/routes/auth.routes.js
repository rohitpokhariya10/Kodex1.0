const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

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

    // Create new user
    let user = await userModel.create({
      username,
      email,
      password,
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

module.exports = authRouter;