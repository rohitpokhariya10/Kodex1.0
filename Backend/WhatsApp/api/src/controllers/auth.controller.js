import * as userDao from "../dao/user.dao.js";


export const registerUser = async (req , res)=>{
    const {username , email , password} = req.body;
     const isUserExist = await userDao.getUserByEmailOrUsername({username,email});
     if(isUserExist){
        return res.status(401).json({
            message:"User already registered with this credential",
        })
     }
    const user = await userDao.createUser({username , email , password});

}

