const { Contact } = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const getById = async (req, res, next) => {
  try {
    const data = await Contact.findById(req.params.id);
    if (!data) {
      throw HttpError(404);
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
