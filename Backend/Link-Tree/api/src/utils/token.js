import jwt from "jsonwebtoken";
import env from "../config/env.js";

export function createAccessToken(userId) {
  return jwt.sign({ id: userId }, env.ACCESS_SECRET, {
    expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
  });
}

export function createRefreshToken(userId) {
  return jwt.sign({ id: userId }, env.REFRESH_SECRET, {
    expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
  });
}
