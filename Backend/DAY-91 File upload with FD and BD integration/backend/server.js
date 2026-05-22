require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");


app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
} )

connectToDb();