const multer = require("multer");
const fs = require("fs");
const utf8 = require("utf8");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var root = process.env.ROOT_IMAGES_FOLDER || "/images";
        var folder = `${root}/unapproved/${req.params.folder}`;
        if (!fs.existsSync(folder)){
            fs.mkdirSync(folder, { recursive: true });
        }
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, utf8.encode(file.originalname));
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb (null, true);
    }
    else {
        cb (
            new Error("File format should be PNG,JPG,JPEG"), 
            false);
    }
}

var upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;