require("dotenv").config();
const app = require("./src/app");


let port = 3000 || 8000;

// Start the Express app after loading environment variables.
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})
