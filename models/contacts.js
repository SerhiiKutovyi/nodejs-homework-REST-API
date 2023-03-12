const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, '../models/contacts.json');

const listContacts = async () => {
  console.log(contactsPath);
  const list = await fs.readFile(contactsPath, 'utf8');
  return JSON.parse(list);
};

const getContactById = async contactId => {};

const removeContact = async contactId => {};

const addContact = async body => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
