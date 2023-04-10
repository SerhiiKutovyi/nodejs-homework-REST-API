const { Contact } = require('../../models/contact');

const { HttpError } = require('../../helpers');

const getById = async (req, res) => {
  const data = await Contact.findById(req.params.id);
  if (!data) {
    throw HttpError(404);
  }
  res.json(data);
};

module.exports = getById;
