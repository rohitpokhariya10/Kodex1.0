const User = require("../models/user.model");
const ApiError = require("../utils/apiError");
const { hashFunction } = require("../utils/hashFunction");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/token");

const registerUser = async ({ name, email, password } = {}) => {
  if (typeof email !== "string" || !email.trim()) {
    throw new ApiError(400, "Email is required");
  }

  if (typeof password !== "string" || !password.trim()) {
    throw new ApiError(400, "Password is required");
  }

  if (password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters long");
  }

  

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    throw new ApiError(409, "User already exists with this email");
  }

  const passwordHash = await hashFunction(password);

  const user = await User.create({
    name: typeof name === "string" ? name.trim() : undefined,
    email: normalizedEmail,
    passwordHash,
  });

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);
  user.registerTokenHash = await hashFunction(refreshToken);
  await user.save();


  //we create this object so that w only send these user details in response
  const safeUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };

  return {
    user: safeUser,
    accessToken,
    refreshToken,
  };
};

module.exports = registerUser;
