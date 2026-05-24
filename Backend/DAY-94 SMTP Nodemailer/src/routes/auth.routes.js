const express = require("express");
const forgotPassword = require("../controllers/auth.controller");
const authRouter = express.Router();


// POST /api/auth/forgot-password -> generate OTP and send reset email.
authRouter.post("/forgot-password" , forgotPassword);

module.exports = authRouter;
