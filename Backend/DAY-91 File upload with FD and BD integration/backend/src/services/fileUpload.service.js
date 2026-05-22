const ApiError = require("../utils/ApiError");
const uploadToImageKit = require("./imagekit.service");
const fileModel = require("../models/file.model");

const singleFileUploadService = async (data) => {
  console.log("data-->", data);
  const file = data;

  if (!file) {
    throw new ApiError(400, "File is required");
  }

  const folder = process.env.IMAGEKIT_FOLDER || "uploads";
  const uploadedFile = await uploadToImageKit(file, folder);

  console.log("uploadedFile-->", uploadedFile);

  const savedFile = await fileModel.create({
    uploadType: "single",
    files: [
      {
        url: uploadedFile.url,
        fileId: uploadedFile.fileId,
        name: uploadedFile.name,
        mimetype: uploadedFile.mimetype,
        size: uploadedFile.size,
      },
    ],
    provider: "imagekit",
  });

  return { savedFile };
};

const multipleFileUploadService = async (data) => {
  const files = data;

  console.log("files in service-->", files);

  if (!files || files.length === 0) {
    throw new ApiError(400, "File is required");
  }

  const folder = process.env.IMAGEKIT_FOLDER || "uploads";

  const uploadedFiles = await Promise.all(
    files.map((file) => uploadToImageKit(file, folder)),
  );

  console.log("uploadedFiles-->", uploadedFiles);
  const fileDocs = uploadedFiles.map((file) => {
    return {
      url: file.url,
      fileId: file.fileId,
      name: file.name,
      mimetype: file.mimetype,
      size: file.size,
    };
  });

  console.log("fileDocs-->", fileDocs);

  const savedFiles = await fileModel.create({
    uploadType: "multiple",
    files: fileDocs,
    provider: "imagekit",
  });

  return { savedFiles };
};
module.exports = { singleFileUploadService, multipleFileUploadService };
