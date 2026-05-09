const express = require("express")
const authRouter = require("./routes/auth.routes")
const app = express()

app.use(express.json())//req.body me data ko read kar skte hai ---> by this middleware


//middleware to connect authRouter with express app
//Prefix---> /api/auth
app.use("/api/auth" , authRouter)

module.exports = app