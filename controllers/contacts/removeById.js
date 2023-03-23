const Contact = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const removeById = async (req, res, next) => {
  // try {
  //   const data = await removeContact(req.params.id);
  //   if (!data) {
  //     throw HttpError(404);
  //   }
  //   res.json({
  //     message: 'Contact deleted',
  //   });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = removeById;
