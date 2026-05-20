const User = require("../models/user.model");
const ApiError = require("../utils/apiError");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/token");
const jwt = require("jsonwebtoken");

const registerUserService = async (data) => {
  let { username, email, password } = data;

  // Check by email first so duplicate accounts fail with a clear API error.
  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new ApiError(409, "User already exists");
  }

  // Create the user; the model pre-save hook hashes the plain password.
  const newUser = await User.create({
    username,
    email,
    password,
  });

  // Generate both tokens from the new user's id.
  const accessToken = generateAccessToken(newUser._id);
  const refreshToken = generateRefreshToken(newUser._id);

  // Store the latest refresh token so old refresh tokens can be rejected later.
  newUser.refreshToken = refreshToken;
  await newUser.save({ validateBeforeSave: false });

  // Return only the fields the controller needs, not the full mongoose document.
  return {
    accessToken,
    refreshToken,
    user: {
      username: newUser.username,
      email: newUser.email,
      id: newUser._id,
    },
  };
};

let loginUserService = async (data) => {
  let { email, password } = data;

  // Password is select:false in the schema, so explicitly include it for login.
  let isUserExist = await User.findOne({ email }).select("+password");

  if (!isUserExist) {
    throw new ApiError(404, "User not registered");
  }

  // Compare the incoming password with the hashed password stored in MongoDB.
  let isCheckPassword = await isUserExist.comparePassword(password);
  if (!isCheckPassword) {
    throw new ApiError(401, "Invalid password");
  }

  // Rotate tokens on every successful login and persist the new refresh token.
  let accessToken = generateAccessToken(isUserExist._id);
  let refreshToken = generateRefreshToken(isUserExist._id);

  isUserExist.refreshToken = refreshToken;
  await isUserExist.save();

  return { accessToken, refreshToken, isUserExist };
};

let refreshAccessTokenService = async (data) => {
  let { refreshToken } = data;

  // The refresh token should come from the httpOnly cookie.
  if (!refreshToken) {
    throw new ApiError(401, "Unauthorized request: refresh token is missing");
  }

  // Verify signature/expiry before trusting the token payload.
  let decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

  // refreshToken is select:false, so include it to validate token rotation.
  let user = await User.findById(decode.id).select("+refreshToken");

  if (!user) {
    throw new ApiError(401, "User does not exist");
  }

  // Reject old or reused refresh tokens.
  if (user.refreshToken !== refreshToken) {
    throw new ApiError(401, "Refresh token is invalid or expired");
  }

  // Issue a fresh token pair and save the new refresh token.
  let accessToken = generateAccessToken(user._id);
  let rT = generateRefreshToken(user._id);

  user.refreshToken = rT;
  await user.save({ validateBeforeSave: false });

  return { rT, accessToken, user };
};

module.exports = { registerUserService, loginUserService, refreshAccessTokenService };
