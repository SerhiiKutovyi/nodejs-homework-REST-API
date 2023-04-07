const { Contact, schemas } = require('../../models/contact');

const { HttpError } = require('../../helpers');

const updateById = async (req, res) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, 'missing fields');
  }
  const data = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404);
  }
  res.json(data);
};

module.exports = updateById;
