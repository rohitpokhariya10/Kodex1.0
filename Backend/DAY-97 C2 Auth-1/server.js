const app = require("./src/app")
const dotenv = require("dotenv")
const connectToDb = require("./src/config/database")
dotenv.config()

app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})

connectToDb()