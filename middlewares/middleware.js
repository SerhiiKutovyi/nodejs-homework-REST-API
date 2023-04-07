const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    next(HttpError(400, 'Not valid id'));
  }
  next();
};

module.exports = isValidId;
