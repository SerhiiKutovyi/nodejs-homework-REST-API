const getAllContacts = require('./getAllContacts');
const getById = require('./getById');
const addNewContact = require('./addNewContact');
const updateById = require('./updateById');
const removeById = require('./removeById');
const updateFavorite = require('./updateFavorite');

module.exports = {
  getAllContacts,
  getById,
  addNewContact,
  updateById,
  removeById,
  updateFavorite,
};
