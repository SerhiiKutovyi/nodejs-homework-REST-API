const fs = require('fs/promises');
const path = require('path');
const { resizeImage } = require('../../helpers');

const { User } = require('../../models/user');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    return res.json({ message: 'Only .png, .jpg ,.jpeg format allowed!' });
  }
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  try {
    resizeImage(tempUpload, resultUpload);
  } catch (error) {
    next(error);
  }

  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join('avatars', filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
