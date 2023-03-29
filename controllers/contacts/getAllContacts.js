const { Contact } = require('../../models/contacts');

const getAllContacts = async (req, res, next) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
