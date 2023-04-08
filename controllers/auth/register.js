const bcrypt = require('bcryptjs');

const { User } = require('../../models/user');

const { HttpError } = require('../../helpers');

const register = async (req, res) => {
  const { email, password, subscription, token } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashPassword,
    subscription,
    token,
  });
  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = register;
