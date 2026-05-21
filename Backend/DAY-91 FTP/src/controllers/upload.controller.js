const ApiError = require("../utils/ApiError");
const uploadToImageKit = require("../services/imagekit.service");

const uploadController = async (req, res) => {
  console.log("req.files---->", req.files);
  const file = req.files?.[0]; //because humne upload.any() use kiya hai
  if (!file) {
    throw new ApiError(
      400,
      "Image file is required. Please upload file with field name 'image'",
    );
  }
  //console.log("req.file", req.file);
  const folder = process.env.IMAGEKIT_FOLDER || "/uploads";
  //console.log("folder-->" , folder);
  const uploadedImage = await uploadToImageKit(file, folder);
  return res.status(201).json({
    message: "File uploaded successfully",
    success: true,
    data: uploadedImage,
  });
};

module.exports = uploadController;
