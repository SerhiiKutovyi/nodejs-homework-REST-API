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

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(ele => ele.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
