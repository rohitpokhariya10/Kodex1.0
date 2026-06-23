import Link from "../models/link.model.js";
import * as linkService from "../services/link.service.js"

// Create Link
export const createLink =  async (req , res)=>{
let newLink = await linkService.createLinkService(req.body , req.user);
return res.status(201).json({
    message:"Link created successfully",
    data:{newLink},
})
}

// Fetch Link by username
export const getLinkByUsername = async (req , res)=>{
    //console.log("username--->" , req.params)
    let allLinks = await linkService.getLinkService(req.params)
    return res.status(200).json({
        message:"All links fetched successfully",
        data:allLinks,
    })
}