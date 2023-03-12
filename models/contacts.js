const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, '../models/contacts.json');

const listContacts = async () => {
  const list = await fs.readFile(contactsPath, 'utf8');
  return JSON.parse(list);
};

const getContactById = async id => {
  const contacts = await listContacts();
  const contact = contacts.find(ele => ele.id === id);
  return contact || null;
};

const removeContact = async id => {
  const contacts = await listContacts();
  const removeContact = contacts.findIndex(ele => ele.id === id);
  if (removeContact === -1) {
    return null;
  }
  const [result] = contacts.splice(removeContact, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    name,
    email,
    phone,
    id: uuidv4(),
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (id, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
