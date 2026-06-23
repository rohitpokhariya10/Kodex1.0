//Check whether the user has sent a valid JWT token or not before allowing access to protected routes.
import jwt from "jsonwebtoken";
import env from "../config/env.js";
import AppError from "../utils/ApiError.js";

export default function authenticate(req, res, next) {
  const [scheme, token] = (req.headers.authorization ?? "").split(" ");
  if (scheme !== "Bearer" || !token) return next(new AppError("Authentication required", 401));

  try {
    const payload = jwt.verify(token, env.ACCESS_SECRET);
    req.user = { userId: payload.id };
    next();
  } catch {
    next(new AppError("Invalid or expired access token", 401));
  }
}
