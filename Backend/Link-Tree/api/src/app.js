import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/index.routes.js";
import AppError from "./utils/ApiError.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())

app.get("/health" , (req , res)=>{
    res.status(200).json({ status: "ok" });
});

app.use("/api", routes);

// Fallback for requests that do not match any route defined above.
app.use((req, res, next) => {
    next(new AppError(`Route ${req.method} ${req.originalUrl} not found`, 404));
});

app.use(errorHandler);


export default app;
