const isValidId = require('../middlewares/middleware');
const authenticate = require('./authenticate');
const validateBody = require('./validateBody');
const upload = require('./upload');

module.exports = {
  isValidId,
  authenticate,
  validateBody,
  upload,
};
