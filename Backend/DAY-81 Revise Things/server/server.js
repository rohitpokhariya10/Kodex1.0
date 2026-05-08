import app from "./src/app.js"
import dotenv from "dotenv"
import { connectToDb } from "./src/config/database.js"
dotenv.config()

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})
connectToDb()