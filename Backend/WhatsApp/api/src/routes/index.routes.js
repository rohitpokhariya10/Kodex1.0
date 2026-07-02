import { Router } from "express";
import authRouter from "../routes/auth.routes.js";

const indexRouter = Router();
console.log("hi indexRouter")
indexRouter.use("/auth" , authRouter);


export default indexRouter;