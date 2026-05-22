const uploadToImageKit = require("../services/imagekit.service");
const ApiError = require("../utils/ApiError");
const {singleFileUploadService , multipleFileUploadService} = require("../services/fileUpload.service")


//1.
const uploadSingleFileController = async (req , res)=>{

const {savedFile} = await singleFileUploadService(req.file)

return res.status(201).json({
    message:"File uploaded successfully",
    success:true,
    data:savedFile,
})
}
//2.
const uploadMultipleFilesController = async (req , res)=>{

const {savedFiles} = await multipleFileUploadService(req.files);

return res.status(201).json({
    message:"File uploaded successfully",
    success:true,
    data:savedFiles,
})
}








module.exports = {uploadMultipleFilesController , uploadSingleFileController};