const { Contact, updateFavoriteSchema } = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const updateFavorite = async (req, res, next) => {
  try {
    const { error } = updateFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, 'missing field favorite');
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

module.exports = updateFavorite;
