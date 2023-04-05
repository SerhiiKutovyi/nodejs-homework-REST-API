const bcrypt = require('bcryptjs');
const { User, schemas } = require('../../models/users');
const { HttpError } = require('../../helpers');

const login = async (req, res, next) => {
  try {
    const { error } = schemas.loginSchema.validate(req.body);
    if (error) {
      throw HttpError(400, 'missing required login field');
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, 'Email or password invalid');
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw HttpError(401, 'Email or password invalid');
    }

    const token = '123t.d123.tu78';
    res.json({
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
