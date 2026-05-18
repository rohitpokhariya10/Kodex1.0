const User = require("../models/user.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const jwt = require("jsonwebtoken");

//
let registerService = async (data) => {
  let { name, email, password } = data;

  // Stop if any required field is missing.
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  // Check if this email is already registered.
  let isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new Error("User email already exist");
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

  // newUser.refreshToken = undefined;

  return {
    accessToken,
    refreshToken,
    newUser,
  };
};

//
let loginService = async (data) => {
  let { email, password } = data;

  // Email and password are needed for login.
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  // Password is hidden by default, so select it for login check.
  let isUserExist = await User.findOne({ email }).select("+password");
  if (!isUserExist) {
    throw new Error("Unauthorised access");
  }

  // Compare entered password with hashed password.
  const isPasswordCorreect = await isUserExist.comparePassword(password);
  if (!isPasswordCorreect) {
    throw new Error("Invalid password");
  }

  // Create new tokens after successful login.
  const accessToken = generateAccessToken(isUserExist._id);
  const refreshToken = generateRefreshToken(isUserExist._id);

  isUserExist.refreshToken = refreshToken;
  await isUserExist.save();

  isUserExist.password = undefined;
  isUserExist.refreshToken = undefined;

  return {
    accessToken,
    refreshToken,
    isUserExist,
  };
};

//
let generateRtAtService = async (refreshToken) => {
  if (!refreshToken) {
    throw new Error("Unauthorized user");
  }

  let verifyRefreshToken = jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
  );
  //console.log(verifyRefreshToken)
  let user = await User.findById(verifyRefreshToken.id).select("+refreshToken");
  // console.log("user-->" , user);
  if (!user) {
    throw new Error("User not found");
  }

  //verify
  if (user.refreshToken !== refreshToken) {
    console.log(user.refreshToken, refreshToken);
    throw new Error("Invalid refresh token");
  }

  //generate accessToken
  let newAccessToken = generateAccessToken(user._id);
  let newRefreshToken = generateRefreshToken(user._id);

  user.refreshToken = newRefreshToken;
  await user.save();

  return {
    newAccessToken,
    newRefreshToken,
  };
};

module.exports = { registerService, loginService, generateRtAtService };
