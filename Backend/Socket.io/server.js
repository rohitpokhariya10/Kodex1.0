const { timeStamp } = require("console");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();

const httpServer = createServer(app);
//This attaches Socket.io to that HTTP server.
const io = new Server(httpServer);

let port = 3000 || 8000;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

io.on("connection", (socket) => {
    console.log("user conncted")
  //console.log("Socket ---> " , socket);
  //1. sever side pe me ye tesla event listen karra hu means ye event clent ne fire kiya hoga
  socket.on("tesla" , (msg)=>{
   console.log("tesla event received, The data is -->" , msg)

     //Server musk event emit kaara hai and data bhi bhjrha hai un sabhi user ko jo soket.io ke server se connected hunge
     io.emit("musk" , {msg , timeStamp:true,});
     io.emit("musk", "hanji user ye le event listen kar ");
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
