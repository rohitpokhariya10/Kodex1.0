import Link from "../models/link.model.js";
import { createLinkService } from "../services/link.service.js";


export const createLink =  async (req , res)=>{
let newLink = await createLinkService(req.body , req.user);
return res.status(201).json({
    message:"Link created successfully",
    data:{newLink},
})
}