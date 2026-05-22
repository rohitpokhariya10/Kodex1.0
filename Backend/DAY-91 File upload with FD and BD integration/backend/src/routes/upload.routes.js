const express = require("express");
const upload = require("../middleware/upload.middleware");
const {uploadSingleFileController , uploadMultipleFilesController} = require("../controllers/upload.controller");

const router = express.Router();

//route for single file upload
router.post("/image" , upload.single("image") , uploadSingleFileController);

//route for multiple file upload
router.post("/images" , upload.array("images" , 5) , uploadMultipleFilesController);

module.exports = router;