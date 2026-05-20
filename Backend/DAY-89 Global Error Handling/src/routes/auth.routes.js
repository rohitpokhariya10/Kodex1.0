const express = require("express");
const {registerController , loginController , refreshAccessTokenController, getMeController, logoutController} = require("../controllers/auth.controller");
const verifyJWT = require("../middleware/auth.middleware");
const authRouter = express.Router();


authRouter.post("/register" , registerController);
authRouter.post("/login" , loginController);
authRouter.post("/refresh-access-token" , refreshAccessTokenController);
authRouter.get("/get-me", verifyJWT, getMeController);
authRouter.post("/logout" , logoutController);

module.exports = authRouter;