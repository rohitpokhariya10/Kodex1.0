const User = require("../models/user.model");
const {
  registerService,
  loginService,
  generateRtAtService,
} = require("../services/auth.services");

const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const jwt = require("jsonwebtoken");

// Register a new user and send auth tokens in cookies.
let registerController = async (req, res) => {
  try {
    let { accessToken, refreshToken  , newUser} = await registerService(req.body);

    // httpOnly keeps tokens safe from frontend JavaScript.
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    // newUser.refreshToken = undefined; //taki response me rt undefined jaye

    return res.status(201).json({
      message: "User registered successfully",
      newUser
    });
  } catch (error) {
    console.error("Error in register route", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Login user and send fresh auth tokens in cookies.
let loginController = async (req, res) => {
  try {
    let { accessToken, refreshToken , isUserExist} = await loginService(req.body);
    // Store tokens in secure cookies.
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    // isUserExist.password = undefined; //taki response me password  na jaye

    return res.status(200).json({
      message: "User loggedin successfully",
      User: isUserExist,
    });
  } catch (error) {
    console.error("Error in login route", error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

//
let refreshAccessTokenController = async (req, res) => {
  try {
    let { newRefreshToken , newAccessToken  } = await generateRtAtService(
      req.cookies.refreshToken,
    );
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Access token generated successfully",
    });
  } catch (error) {
    console.error("Errron in refreshAccessTokenController route", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  registerController,
  loginController,
  refreshAccessTokenController,
};
