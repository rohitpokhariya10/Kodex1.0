const asyncHandler = require("../utils/asyncHandler");

const {
  registerUserService,
  loginUserService,
  refreshAccessTokenService,
} = require("../services/auth.service");

// Register a new user and set access/refresh tokens in httpOnly cookies.
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

// Login an existing user and rotate both tokens.
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

// Generate a new access token using the refresh token stored in cookies.
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

module.exports = {
  registerController,
  loginController,
  refreshAccessTokenController,
};
