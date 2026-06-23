import { validationResult } from "express-validator";
import AppError from "../utils/ApiError.js";

export default function validateRequest(req, res, next) {
  const errors = validationResult(req);
  console.log("errors before--->" , errors);
  if (!errors.isEmpty()) {
    const error = new AppError("Validation failed", 422);
    error.errors = errors.array().map(({ path, msg }) => ({ field: path, message: msg }));
    return next(error);
  }
    console.log("errors after--->" , errors);
  next();
}
