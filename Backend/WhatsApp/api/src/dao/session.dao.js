import Session from "../models/session.model.js";




export const createSession = async ({username , refreshToken , user})=>{
    const session = await Session.create({
        username ,
        refreshTokenHash:refreshToken,
        userId : user._id,

    });
    return session;
}

export const getSessionBySerId = async ({userId}) =>{
    const session = await Session.findOne({userId});
    return session;
}