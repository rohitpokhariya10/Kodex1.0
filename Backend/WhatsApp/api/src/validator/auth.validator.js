import {body} from "express-validator";
import { validationRequest } from "../middlewares/validation.middleware.js";


export const registerUserValidator = [
    body('username')
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({min:3}).withMessage("Username must be 3 character long"),
    body('email')
    .normalizeEmail()
    .trim()
    .isEmail().withMessage("Invalid email format")
    .notEmpty().withMessage("Email is required"),
    body('password')
    .trim()
    .isLength({min:8}).withMessage("Password must be 8 char long"),
    validationRequest

]