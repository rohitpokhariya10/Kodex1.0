const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");


const app = express();
app.use(express.json());
app.use(cookieParser());

//Whenever request starts with /api/auth, send it to authRouter
// This is the base URL ---> "/api/auth"
app.use("/api/auth" , authRouter);


module.exports = app;
