const { Contact, addSchema } = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
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
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
