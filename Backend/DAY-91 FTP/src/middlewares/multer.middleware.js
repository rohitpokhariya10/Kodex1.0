const multer = require("multer");

// memoryStorage means the uploaded file will be stored temporarily in RAM.
// This is useful when we want to upload the file directly to cloud storage
// like ImageKit, Cloudinary, S3, etc. instead of saving it locally.
const storage = multer.memoryStorage();

// Create Multer upload middleware with our custom configuration
const upload = multer({
  // Tell Multer where/how to store the uploaded file
  storage,

  // Set upload restrictions
  limits: {
    // Maximum file size allowed: 2 MB
    // 1024 * 1024 = 1 MB
    // 2 * 1024 * 1024 = 2 MB
    fileSize: 2 * 1024 * 1024,

    // Maximum number of files allowed per request
    files: 1,
  },
});

// Export upload middleware so we can use it in routes
module.exports = upload;