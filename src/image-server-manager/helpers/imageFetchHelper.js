var fs = require('fs');
var path = require('path');
const acceptedExtensions = [ "png", "jpg", "jpeg" ];

var getAllImages = (dir, done) => {

  var results = [];
  fs.readdir(dir, (err, list) => {

    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(file => {

      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {

        if (stat && stat.isDirectory()) {
            getAllImages(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          let extension = file.split('.').pop();
          if (acceptedExtensions.indexOf(extension)) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }

      });
    });
  });
};

module.exports = getAllImages;