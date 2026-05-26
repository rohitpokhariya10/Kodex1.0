const express = require("express");
const {registerController , forgotPasswordController, forgotPasswordPage, registerPage, resetPasswordPage, resetPassword} = require("../controller/auth.controller");

const authRouter = express.Router();
//Because browser by default get re bhjta hai agar koi new page open krna ho
//1.
authRouter.get("/registerPage" , registerPage);
authRouter.post("/register", registerController);

//2.
authRouter.get("/forgotPasswordPage" ,  forgotPasswordPage);
authRouter.post("/forgot-password" , forgotPasswordController);

//3.
authRouter.get("/resetPasswordPage/:token" , resetPasswordPage);
authRouter.post("/reset-password/:token" , resetPassword);

module.exports = authRouter;
