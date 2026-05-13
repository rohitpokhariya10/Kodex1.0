const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());//global middleware
app.use(cookieParser());
//authRouter se bane hue sare route ka prefix --> /api/auth hoga
app.use("/api/auth" , authRouter)//global middleware


module.exports = app;