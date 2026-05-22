const multer = require("multer");
const ApiError = require("../utils/ApiError");

const storage = multer.memoryStorage();

const fileFilter = (req , file , cb)=>{
    console.log("file-->" , file);
    //image--> category
    ///jpeg-->category ke andar ka subtype
    const allowedTypes =['image/jpeg' ,'image/png' , 'image/webp'];
    
    // console.log("file mimeType-->" , file.mimetype)
    if(!allowedTypes.includes(file.mimetype)){
        throw new ApiError(400 , "File format not supported")
    }

    cb(null , true);
}

//es configuration ke jriye mulkter ko btarhe hai ki storage konsi use hogi  , filetyp kya hoga and limits kya hogi
const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;