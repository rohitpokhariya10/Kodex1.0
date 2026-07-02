//Database Operations code comes in dao file
//This file is for User(MODEL) perform operations with Database
import User from "../models/user.model.js";

export const createUser = async ({username , email , password})=>{
   let user = await User.create({
      username ,
      email ,
      password
    });
    return user;
}
//
export const getUserByEmailOrUsername = async ({username, email})=>{
    let user = await User.findOne({
        $or:[
            {username},
            {email}
        ]
    });
    return user;
}
