import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "./token.js";

export async function createSession(user) {
  const userId = user._id.toString();
  const refreshToken = createRefreshToken(userId);

  user.refreshToken = await bcrypt.hash(refreshToken, 10);
  await user.save();

  return { accessToken: createAccessToken(userId), refreshToken };
}
