import dotenv from "dotenv";
dotenv.config();
import AppError from "../utils/ApiError.js";

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new AppError(`Missing required environment variable: ${name}`);
  }
  return value;
}
const port = Number(process.env.PORT ?? 8000);
if(!Number.isInteger(port) || port <= 0){
    throw new AppError("PORT must be a valid positive number");
}



const env = Object.freeze({
    NODE_ENV : process.env.NODE_ENV ?? "development",
    PORT:port,
    MONGO_URI : requireEnv("MONGO_URI"),
  ACCESS_SECRET : requireEnv("ACCESS_SECRET"),
    REFRESH_SECRET: requireEnv("REFRESH_SECRET"),
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN ?? "15m",
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? "7d",
});

export default env;
