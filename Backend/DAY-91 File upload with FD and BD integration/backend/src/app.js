const express = require("express");
const router = require("./routes/upload.routes");
const app = express();
const cors = require("cors");

app.use(express.json());



app.use(
  cors({
    origin: "http://localhost:5173", // no trailing slash
    
  })
);
//route
app.use("/api/v1/uploads" , router);




module.exports = app;