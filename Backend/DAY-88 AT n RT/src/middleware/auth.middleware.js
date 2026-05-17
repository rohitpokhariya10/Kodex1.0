const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// This middleware protects private routes.
// It checks accessToken and allows request only for logged-in users.
const authMiddleware = async (req, res, next) => {
  try {
    // Token can come from cookie or Authorization header.
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // If token is missing, user is not logged in.
    if (!token) {
      return res.status(401).json({
        message: "Access token is required",
      });
    }

    // Verify token using the same secret used while creating it.
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find user from token id and remove sensitive fields.
    const user = await User.findById(decodedToken.id).select(
      "-password -refreshToken"
    );

    // If user does not exist, token is not useful anymore.
    if (!user) {
      return res.status(401).json({
        message: "Invalid access token",
      });
    }

    // Store logged-in user data in request for next controller.
    req.user = user;

    // Move to the next middleware or controller.
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired access token",
    });
  }
};

module.exports = authMiddleware;
