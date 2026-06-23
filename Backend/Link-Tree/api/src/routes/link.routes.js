import {Router} from "express";
import authenticate from "../middlewares/auth.middleware.js";
import * as linkController from "../controllers/link.controller.js"


const router = Router();

router.post("/" , authenticate , linkController.createLink );


export default router;