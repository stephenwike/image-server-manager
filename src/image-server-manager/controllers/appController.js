const fs = require("fs");
const helper = require("../helpers/imageFetchHelper");

const getImages = async (req, res) => {
  try {
    var root = process.env.ROOT_IMAGES_FOLDER || "/images";
    var path = `${root}/unapproved`;
    helper(path, (err, files) => {
      if (err) { 
        console.log(err);
        return res.status(500).json({error: err});
      }
      else {
        console.log(files);
        return res.status(200).json({ files, msg: "image info fetched"});
      }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
};

const uploadImage = async (req, res) => {

  try {
    if (req.file && req.file.path) {
      return res.status(200).json({ msg: "image successfully saved" });
    } else {
      console.log(req.file);
      return res.status(422).json({ error: "invalid" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "some error occured" });
  }
};

module.exports = {
  getImages,
  uploadImage,
};