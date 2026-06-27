import {config} from "dotenv";
config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in the environment variables");
}
const env = {
    MONGO_URI : process.env.MONGO_URI,
}
export default Object.freeze(env);