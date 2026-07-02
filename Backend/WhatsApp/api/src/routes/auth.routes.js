import {Router} from "express";
import * as authController from "../controllers/auth.controller.js";
import * as authValidator from "../validator/auth.validator.js";

const authRouter = Router();
console.log("hi authRouter")
authRouter.post("/register" , authValidator.registerUserValidator , authController.registerUser);

export default authRouter;