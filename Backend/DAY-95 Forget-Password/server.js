require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/db");



let port = 3000 || 8000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
    
})

connectToDb();