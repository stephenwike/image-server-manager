// const Image = require("../models/Image");
const fs = require("fs");

const getImages = async (req, res) => {
  try {
    
    var path = "C:/home-dev/image-server-manager/devtools/data/unapproved";
    fs.readdir(path, (err, files) => {
        if (err) console.log(err);
        else console.log(files);
        return res.status(200).json({ files, msg: "image info fetched"    });
    });

    // fs.recurse(path, (filepath, relative, filename) => {
    //     if (!filename) return;
    // });

  } catch (error) {
    console.log("EXCEPTION ERROR");
    console.error(error);
    return res.status(500).json({ error: error });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (req.file && req.file.path) {
    //   const image = new Image({
    //     description: req.body.desc,
    //     url: req.file.path,
    //   });

//TODO: Save Image

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