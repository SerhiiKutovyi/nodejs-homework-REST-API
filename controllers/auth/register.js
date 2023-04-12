const bcrypt = require('bcryptjs');

const gravatar = require('gravatar');

const { User } = require('../../models/user');

const { HttpError, sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const { v4: uuidv4 } = require('uuid');

const register = async (req, res) => {
  const { email, password, subscription, token } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();

  const newUser = await User.create({
    email,
    password: hashPassword,
    subscription,
    token,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: 'Verify email',
    text: 'Verify your email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify</a>`,
  };

  await sendEmail(mail);

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
