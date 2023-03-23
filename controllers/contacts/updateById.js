const Contact = require('../../models/contacts');

const { HttpError } = require('../../helpers');
const addSchema = require('../../schemas/contacts');

const updateById = async (req, res, next) => {
  // try {
  //   const { error } = addSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400, 'missing fields');
  //   }
  //   const data = await updateContact(req.params.id, req.body);
  //   if (!data) {
  //     throw HttpError(404);
  //   }
  //   res.json(data);
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = updateById;
