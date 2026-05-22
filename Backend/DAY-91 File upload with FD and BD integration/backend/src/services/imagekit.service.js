const imageKit = require("../config/imageKit");
const ApiError = require("../utils/ApiError");



const uploadToImageKit = async (file , folder)=>{
try{
    console.log("file-->" , file);
    if(!file){
        throw new ApiError(400 , "File is required");
    }
    const uploadResponse = await imageKit.upload({
        file:file.buffer,
        folder,
        fileName:file.originalname
    });
    console.log("upload response-->" , uploadResponse)

    return {
        fileId:uploadResponse.fileId,
        name:uploadResponse.name,
        url:uploadResponse.url,
        mimetype:file.mimetype,
        size:uploadResponse.size,
    }
}
catch(error){
    console.error("Error in imageKit Service-->" , error);
    throw new ApiError(500 , error.message || "Internal Server Error");
}


}

module.exports = uploadToImageKit;