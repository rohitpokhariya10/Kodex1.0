const express = require("express");
const uploadController = require("../controllers/upload.controller");
const upload = require("../middlewares/multer.middleware");


const uploadRouter = express.Router();

// uploadRouter.post("/" , upload.single('image') ,uploadController);
uploadRouter.post("/" , upload.any() , uploadController);// // upload.any() file ko req.files array me deta hai


module.exports = uploadRouter;