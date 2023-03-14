const { listContacts } = require('../../models/contacts');

const getAllContacts = async (req, res, next) => {
  try {
    const data = await listContacts();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
