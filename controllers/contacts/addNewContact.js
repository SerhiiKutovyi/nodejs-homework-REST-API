const { Contact } = require('../../models/contact');

const addNewContact = async (req, res) => {
  const { id_: owner } = req.user;
  const data = await Contact.create({ ...req.body, owner });
  res.status(201).json(data);
};

module.exports = addNewContact;
