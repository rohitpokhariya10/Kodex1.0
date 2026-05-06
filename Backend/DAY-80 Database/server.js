//1. Server Start

let app = require("./src/app")
let connectToDb = require("./src/config/database")
// console.log(connectToDb)

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})

//db call
connectToDb()
