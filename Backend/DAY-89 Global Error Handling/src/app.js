const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const errorMiddleware = require("./middleware/error.middleware");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" , authRouter);

app.use(errorMiddleware);

module.exports = app;
