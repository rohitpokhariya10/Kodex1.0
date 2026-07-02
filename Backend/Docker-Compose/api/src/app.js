import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/index.routes.js";

const app = express();
app.use(express.json())
app.use(morgan("dev"));

app.use("/api" , indexRouter);
/* 

*/
app.get("/health" , (req , res)=>{
    res.status(200).json({
        message:"Server is not healthy",
    })
})

export default app;