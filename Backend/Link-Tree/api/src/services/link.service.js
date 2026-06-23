import Link from "../models/link.model.js";
import User from "../models/user.model.js";
import AppError from "../utils/ApiError.js";

// Create Link
export const createLinkService = async ({title , url },{userId})=>{
    // console.log("title-->" , title);
    // console.log("url-->" , url);
    // console.log("userId--->" , userId)

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

// Fetch all links on the basis of username
export const getLinkService = async ({username})=>{

    let user = await User.findOne({username});
    let allLinks = await Link.find({user:user._id});
    //console.log("allLinks--->" , allLinks)

    return allLinks

}