const asyncHandler = require("../utils/asyncHandler");
const {
  registerUserService,
  loginUserService,
  refreshAccessTokenService,
  logOutUserService,
} = require("../services/auth.service");
const ApiError = require("../utils/apiError");
const User = require("../models/user.model");

//1. Register a new user and set access/refresh tokens in httpOnly cookies.
const registerController = asyncHandler(async (req, res) => {
  // Service handles validation, user creation, password hashing, and token generation.
  let { refreshToken, accessToken, user } = await registerUserService(req.body);

  // Send tokens as cookies so the client does not need to store them manually.
  return res
    .status(201)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({
      success: true,
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    });
});

//2. Login an existing user and rotate both tokens.
const loginController = async (req, res) => {
  // Service checks email/password and returns fresh tokens.
  let { accessToken, refreshToken, isUserExist } = await loginUserService(req.body);

  // Store the latest tokens in cookies after successful login.
  return res
    .status(200)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({
      success: true,
      message: "User logged in successfully",
      user: {
        username: isUserExist.username,
        email: isUserExist.email,
        id: isUserExist._id,
      },
    });
};

//3. Generate a new access token using the refresh token stored in cookies.
const refreshAccessTokenController = async (req, res) => {
  // Service verifies the incoming refresh token and rotates it.
  let { rT, accessToken, user } = await refreshAccessTokenService(req.cookies);

  // Replace the old cookies with the newly generated token pair.
  return res
    .status(200)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .cookie("refreshToken", rT, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({
      success: true,
      message: "User AT/RT generated successfully",
      user: {
        username: user.username,
        email: user.email,
        id: user._id,
      },
    });
};

//4.
const getMeController =(req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
}

//5. logout Controller
const logoutController = async (req, res) => {
 await logOutUserService(req.cookies?.refreshToken);
  return res
    .status(200)
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    })
    .json({
      success: true,
      message: "User logged out successfully",
    });
};

module.exports = {
  registerController,
  loginController,
  refreshAccessTokenController,
  getMeController,
  logoutController
};
