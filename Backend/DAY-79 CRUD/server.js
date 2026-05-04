//1. Server start
const app = require("./src/app")

//console.log("app-->" , app)

//Server Start
app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})