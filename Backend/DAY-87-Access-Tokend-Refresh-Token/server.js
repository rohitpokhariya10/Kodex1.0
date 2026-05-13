require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");


let port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is running on port  ${port}`);
})

connectToDb();