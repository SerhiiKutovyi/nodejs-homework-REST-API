const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const getLogout = require('./getLogout');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendEmail = require('./resendEmail.js');

module.exports = {
  register,
  login,
  getCurrent,
  getLogout,
  updateAvatar,
  verify,
  resendEmail,
};
