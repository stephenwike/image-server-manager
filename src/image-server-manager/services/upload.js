const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(
            (error) => console.log(error),
            'tmp/unapproved');
    },
    filename: (req, file, cb) => {
        cb(
            (error) => console.log(error),
            file.filename + '-' + Date.now());
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb (
            (error) => console.log(error),
            true);
    }
    else {
        cb (
            new Error("File format should be PNG,JPG,JPEG"), 
            false);
    }
}

var upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;