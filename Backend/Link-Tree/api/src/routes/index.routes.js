import { Router } from "express";
import authRoutes from "./auth.routes.js";
import linkRoutes from "./link.routes.js"
const router = Router();

//auth routes
router.use("/auth", authRoutes);
//link routes
router.use("/links" , linkRoutes);

export default router;
