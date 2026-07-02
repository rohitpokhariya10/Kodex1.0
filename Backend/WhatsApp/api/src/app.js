import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.routes.js";
const app = express();
//
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

//
app.use("/api" , indexRouter);

//
app.get("/health" , (req,res)=>{
    res.status(200).json({
        message:"Server is healthy",
    })
})



export default app;

