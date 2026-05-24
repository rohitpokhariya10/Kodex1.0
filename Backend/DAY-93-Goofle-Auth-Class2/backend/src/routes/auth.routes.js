const express = require("express");
const passport = require("../config/passport");
const { googleCallback } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googleCallback
);

module.exports = authRouter;
