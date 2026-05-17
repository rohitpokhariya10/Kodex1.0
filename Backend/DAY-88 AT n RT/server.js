require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on Port ${process.env.PORT}`)
})

connectDB();