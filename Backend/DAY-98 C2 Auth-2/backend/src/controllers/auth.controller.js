const User = require("../models/user.model");
const {
  generateAccessToken,
  generateRefreshToken,
  hashToken,
} = require("../utils/jwt");

const googleCallback = async (req, res, next) => {
  try {
    const user = req.user;

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const refreshTokenHash = hashToken(refreshToken);

    await User.findByIdAndUpdate(user._id, {
      refreshTokenHash,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Google login successful",
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  googleCallback,
};
