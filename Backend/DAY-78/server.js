let http = require("http")
//console.log("http -->" , http)
let server = http.createServer((req,res)=>{
    res.end("server chalu hogya")
})
console.log("server ->" , server)

server.listen((3000) , ()=>{
    res.end("ho")
    console.log("Server is running on port 3000")
})