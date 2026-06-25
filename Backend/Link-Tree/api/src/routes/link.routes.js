import {Router} from "express";
import authenticate from "../middlewares/auth.middleware.js";
import * as linkController from "../controllers/link.controller.js"


const router = Router();

// Protected route
router.post("/" , authenticate , linkController.createLink );
// Public route
router.get("/:username" , linkController.getLinkByUsername);

export default router;