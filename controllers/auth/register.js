const bcrypt = require('bcryptjs');

const gravatar = require('gravatar');

const { User } = require('../../models/user');

const { HttpError } = require('../../helpers');

const register = async (req, res) => {
  const { email, password, subscription, token } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    email,
    password: hashPassword,
    subscription,
    token,
    avatarURL,
  });
  res.status(201).json({
    Status: '201 Created',
    ResponseBody: {
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    },
  });
};

module.exports = register;
