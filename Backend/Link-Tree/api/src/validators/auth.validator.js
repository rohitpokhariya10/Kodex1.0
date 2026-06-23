import { body } from "express-validator";

export const registerValidator = [
  body("username").trim().isLength({ min: 3, max: 30 }).withMessage("Username must be 3 to 30 characters"),
  body("email").trim().isEmail().normalizeEmail().withMessage("A valid email is required"),
  body("password").isLength({ min: 8, max: 72 }).withMessage("Password must be 8 to 72 characters"),
];

export const loginValidator = [
  body("identifier")
    .trim()
    .notEmpty()
    .withMessage("Email or username is required")
    .customSanitizer((value) => (value.includes("@") ? value.toLowerCase() : value)),
  body("password").isString().notEmpty().withMessage("Password is required"),
];
