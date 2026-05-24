require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/auth.routes");
const errorMiddleware = require("./middleware/error.middleware");
const app = express();

// Parse incoming JSON request bodies so controllers can read req.body.
app.use(express.json());


// Health check route to quickly verify that the server is running.
app.get("/health" , (req , res)=>{
    res.status(200).json({
        message:"Server is healthy",
        success:true,
    })
})


// All authentication related APIs start with /api/auth.
app.use("/api/auth", authRouter);


// Final middleware: converts thrown errors into a JSON response.
app.use(errorMiddleware);


module.exports = app;
