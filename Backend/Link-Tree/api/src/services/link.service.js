import Link from "../models/link.model.js";
import AppError from "../utils/ApiError.js";


export const createLinkService = async ({title , url },{userId})=>{
    console.log("title-->" , title);
    console.log("url-->" , url);
    console.log("userId--->" , userId)

    if(!title){
        throw new AppError(400 , 'title is required' )
    }
    if(!url){
        throw new AppError(400 , 'Url is required' )
    }
    let id = userId;
    console.log("userId--->" , id);

    let newLink = await Link.create({
        user:id,
        title,
        url
    })
    return newLink;
    
}