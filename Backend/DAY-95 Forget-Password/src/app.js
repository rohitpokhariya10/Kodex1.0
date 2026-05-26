const express = require("express");
const errorMiddleware = require("./middleware/error.middleware");
const authRouter = require("./routes/auth.routes");
const ejs = require("ejs");
const path = require("path");

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));//for reading form data

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use("/api/auth", authRouter);

app.use(errorMiddleware);

module.exports = app;
