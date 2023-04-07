const isValidId = require('../middlewares/middleware');
const authenticate = require('./authenticate');
const validateBody = require('./validateBody');

module.exports = {
  isValidId,
  authenticate,
  validateBody,
};
