const imageKit = require("../config/imageKit.config")

const uploadToImageKit = async (file , folder)=>{
const uploadResponse = await imageKit.upload({
    file:file.buffer,
    fileName:file.originalname,
    folder:folder,
})
 return {
    fileId: uploadResponse.fileId,
    name: uploadResponse.name,
    url: uploadResponse.url,
    thumbnailUrl: uploadResponse.thumbnailUrl,
    filePath: uploadResponse.filePath,
    size: uploadResponse.size,
    mimetype: file.mimetype,
  };
}

module.exports = uploadToImageKit;