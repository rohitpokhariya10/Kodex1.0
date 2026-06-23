import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../config/env.js";
import User from "../models/user.model.js";
import AppError from "../utils/ApiError.js";
import { createSession } from "../utils/session.js";

export async function registerUser({ username, email, password }) {
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    const field = existingUser.email === email ? "email" : "username";
    throw new AppError(`This ${field} is already in use`, 409);
  }

  const user = await User.create({ username, email, password });
  const tokens = await createSession(user);

  return { user, ...tokens };
}

export async function loginUser({ identifier, password }) {
  const user = await User.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  }).select("+password +refreshToken");

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Invalid email/username or password", 401);
  }

  const tokens = await createSession(user);
  return { user, ...tokens };
}

export async function refreshSession(refreshToken) {
  if (!refreshToken) throw new AppError("Refresh token is required", 401);

  let payload;
  try {
    payload = jwt.verify(refreshToken, env.REFRESH_SECRET);
  } catch {
    throw new AppError("Invalid or expired refresh token", 401);
  }

  const user = await User.findById(payload.id).select("+refreshToken");
  if (!user || !user.refreshToken || !(await bcrypt.compare(refreshToken, user.refreshToken))) {
    throw new AppError("Refresh token is no longer valid", 401);
  }

  const tokens = await createSession(user);
  return { user, ...tokens };
}

export async function logoutUser(refreshToken) {
  if (!refreshToken) return;

  try {
    const payload = jwt.verify(refreshToken, env.REFRESH_SECRET);
    await User.findByIdAndUpdate(payload.id, { $unset: { refreshToken: 1 } });
  } catch {
    // A missing or expired token still results in a successful client-side logout.
  }
}

export async function getUserById(userId) {
  const user = await User.findById(userId);
  if (!user) throw new AppError("User not found", 404);
  return user;
}
