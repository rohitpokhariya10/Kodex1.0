const express = require("express");
const { registerController, loginController, refreshAccessTokenController } = require("../controllers/auth.controller");
const authRouter = express.Router();


authRouter.post("/register" , registerController);
authRouter.post("/login" , loginController);
authRouter.post("/refresh-token" , refreshAccessTokenController);



module.exports = authRouter;