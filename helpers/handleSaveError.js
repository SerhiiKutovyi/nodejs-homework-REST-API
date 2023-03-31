const handleSaveErrors = (error, data, next) => {
  error.status =
    error.name === 'MongoServerError' && error.code === 11000 ? 409 : 400;
  next();
};

module.exports = handleSaveErrors;
