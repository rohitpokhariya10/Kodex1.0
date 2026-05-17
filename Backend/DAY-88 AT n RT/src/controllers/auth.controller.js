const User = require("../models/user.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

// Register a new user and send auth tokens in cookies.
let registerController = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // Stop if any required field is missing.
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if this email is already registered.
    let isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(409).json({
        message: "User email already exist",
      });
    }

    // Create user. Password is hashed by user model before saving.
    let newUser = await User.create({
      name,
      password,
      email,
    });

    // Create login tokens for the new user.
    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);

    // Save refresh token so we can verify it later.
    newUser.refreshToken = refreshToken;
    await newUser.save();

    // httpOnly keeps tokens safe from frontend JavaScript.
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
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
    let { email, password } = req.body;

    // Email and password are needed for login.
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Password is hidden by default, so select it for login check.
    let isUserExist = await User.findOne({ email }).select("+password");
    if (!isUserExist) {
      return res.status(404).json({
        message: "Unauthorised access",
      });
    }

    // Compare entered password with hashed password.
    const isPasswordCorreect = await isUserExist.comparePassword(password);
    if (!isPasswordCorreect) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create new tokens after successful login.
    const accessToken = generateAccessToken(isUserExist._id);
    const refreshToken = generateRefreshToken(isUserExist._id);

    // Store tokens in secure cookies.
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    return res.status(200).json({
        message:"User loggedin successfully",
        User:isUserExist
    })
  } catch (error) {
    console.error("Error in login route", error);
    return res.status(500).json({
        mesage:"Internal Server error"
    })
  }
};

module.exports = { registerController, loginController };
