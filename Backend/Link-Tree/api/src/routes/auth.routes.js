import { Router } from "express";
import { login, logout, me, refresh, register } from "../controllers/auth.controller.js";
import authenticate from "../middlewares/auth.middleware.js";
import validateRequest from "../middlewares/validateRequest.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";

const router = Router();

router.post("/register", registerValidator, validateRequest, register);
router.post("/login", loginValidator, validateRequest, login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", authenticate, me);

export default router;
