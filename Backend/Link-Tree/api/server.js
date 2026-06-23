import app from "./src/app.js"
import connectToDb from "./src/database/db.js";
import env from "./src/config/env.js";

let server;

async function bootstrap(){
    try{
        await connectToDb();

    server = app.listen(env.PORT , ()=>{
        console.log(`Server is running on http://localhost:${env.PORT}`);
    });
    }
    catch(error){
        console.error("Application failed to start:" , error.message);
        process.exit(1);
    }
}

function shutdown(signal){
    console.log(`${signal} received. Shutting down gracefully...`);
    if(!server){
        process.exit(0);
    }
    server.close(()=>{
        console.log("HTTP server closed");
        process.exit(0);
    });
}

process.on("SIGINT" , ()=> shutdown("SIGINT"));
process.on("SIGTERM" , ()=> shutdown("SIGTERM"));


bootstrap();
