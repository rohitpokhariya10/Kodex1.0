const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

//
let authMiddleware = async (req , res , next) =>{

    try{
        //
        let {JWT_TOKEN} = req.cookies;

        if(!JWT_TOKEN){
            return res.status(404).json({
                message:"Unauthorized access"
            })
        }
        //
        let decode = jwt.verify(JWT_TOKEN , process.env.JWT_SECRET);
        console.log("decode" , decode);

        if(!decode){
            return res.status(401).json({
                message:"Unauthorized user"
            })
        }
        let User = await userModel.findById(decode.id);
        //
        req.user = User;
        console.log("request -->" , req);

        next();
    }
    catch(error){
        console.error("Error ion auth middleware" , error)
        return res.status(500).json({
            message:"Error in auth middleware"
        })
    }
}

module.exports = authMiddleware;