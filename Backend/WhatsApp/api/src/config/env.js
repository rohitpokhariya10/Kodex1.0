import {config} from "dotenv";
config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in the environment variables");
}
if(!process.env.JWT_ACCESS_TOKEN_SECRET){
    throw new Error("JWT_ACCESS_TOKEN_SECRET is not defined in the environment variables");
}
if(!process.env.JWT_REFRESH_TOKEN_SECRET){
    throw new Error("JWT_REFRESH_TOKEN_SECRET is not defined in the environment variables");
}
const env = {
    MONGO_URI : process.env.MONGO_URI,
    JWT_ACCESS_TOKEN_SECRET : process.env.JWT_ACCESS_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_SECRET : process.env.JWT_REFRESH_TOKEN_SECRET,
}
export default Object.freeze(env);