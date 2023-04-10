const { Contact } = require('../../models/contact');

const { HttpError } = require('../../helpers');

const updateById = async (req, res) => {
  const data = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!data) {
    throw HttpError(404);
  }
  res.json(data);
};

module.exports = updateById;
