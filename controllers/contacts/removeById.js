const { Contact } = require('../../models/contact');

const { HttpError } = require('../../helpers');

const removeById = async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.id);
  if (!data) {
    throw HttpError(404);
  }
  res.json({
    message: 'Contact deleted',
  });
};

module.exports = removeById;
