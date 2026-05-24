require("dotenv").config();

const express = require("express");
const passport = require("./config/passport");
const authRouter = require("./routes/auth.routes");
const errorHandler = require("./middleware/error.middleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", authRouter);

// Static frontend files serve
app.use(express.static(path.join(__dirname, "../public")));

// React/Vite index.html fallback
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.use(errorHandler);

module.exports = app;