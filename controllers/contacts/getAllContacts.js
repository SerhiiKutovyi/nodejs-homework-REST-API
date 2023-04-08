const { Contact } = require('../../models/contact');

const getAllContacts = async (req, res) => {
  const { _id } = req.user;
  const data = await Contact.find({ owner: _id }).populate(
    'owner',
    '_id email'
  );
  res.json(data);
};

module.exports = getAllContacts;
