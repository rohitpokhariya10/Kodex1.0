import { matchedData } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";
import {
  clearRefreshCookieOptions,
  refreshCookieOptions,
} from "../utils/cookie.js";
import {
  getUserById,
  loginUser,
  logoutUser,
  refreshSession,
  registerUser,
} from "../services/auth.service.js";

const publicUser = (user) => ({
  id: user._id,
  username: user.username,
  email: user.email,
  createdAt: user.createdAt,
});

export const register = asyncHandler(async (req, res) => {
  const { user, accessToken, refreshToken } = await registerUser(matchedData(req));
  res.cookie("refreshToken", refreshToken, refreshCookieOptions());
  res.status(201).json({
    status: "success",
    data: { user: publicUser(user), accessToken },
  });
});

export const login = asyncHandler(async (req, res) => {
  const { user, accessToken, refreshToken } = await loginUser(matchedData(req));
  res.cookie("refreshToken", refreshToken, refreshCookieOptions());
  res.status(200).json({ status: "success", data: { user: publicUser(user), accessToken } });
});

export const refresh = asyncHandler(async (req, res) => {
  const { accessToken, refreshToken } = await refreshSession(req.cookies.refreshToken);
  res.cookie("refreshToken", refreshToken, refreshCookieOptions());
  res.status(200).json({ status: "success", data: { accessToken } });
});

export const logout = asyncHandler(async (req, res) => {
  await logoutUser(req.cookies.refreshToken);
  res.clearCookie("refreshToken", clearRefreshCookieOptions());
  res.status(204).send();
});

export const me = asyncHandler(async (req, res) => {
  const user = await getUserById(req.user.userId);
  res.status(200).json({ status: "success", data: { user: publicUser(user) } });
});
