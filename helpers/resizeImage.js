const Jimp = require('jimp');

const { HttpError } = require('./HttpError');

const resizeImage = async (tempUpload, resultUpload) => {
  Jimp.read(tempUpload, (err, image) => {
    if (err) {
      HttpError(400);
    }
    image.resize(250, 250).quality(60).write(resultUpload);
  });
};

module.exports = resizeImage;
