const { getContactById } = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const getById = async (req, res, next) => {
  try {
    const data = await getContactById(req.params.id);
    if (!data) {
      throw HttpError(404);
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
