const express = require("express");
const upload = require("../services/upload");

const { uploadImage, getImages } = require("../controllers/appController");
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// /api/images
router.get("/images", getImages);
// /api/upload
router.post("/upload/:folder", upload.single("image"), uploadImage);
module.exports = router;