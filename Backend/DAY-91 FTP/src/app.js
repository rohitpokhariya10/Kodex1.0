const express = require("express");
const app = express();
const uploadRouter = require("./routes/upload.routes");
const errorMiddleware = require("./middlewares/error.middleware");

app.use(express.json());

app.use("/api/uploads" , uploadRouter)
app.use(errorMiddleware);

module.exports = app;