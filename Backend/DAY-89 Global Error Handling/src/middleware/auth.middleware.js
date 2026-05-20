const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const verifyJWT = async (req, res, next) => {
  // 1. Get token from cookies or Authorization header
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // 2. If token missing
  if (!token) {
    throw new ApiError(401, "Unauthorized request: access token is missing");
  }

  // 3. Verify token
  let decodedToken;

  
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if(!decodedToken){
      throw new ApiError(401, "Invalid or expired access token");
  }


  // 4. Find user from decoded token
  const user = await User.findById(decodedToken.id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(401, "Invalid access token: user not found");
  }

  // 5. Attach user to request
  req.user = user;

  // 6. Go to next middleware/controller
  next();
};

module.exports = verifyJWT;
