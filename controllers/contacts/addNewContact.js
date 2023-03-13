const { addContact } = require('../../models/contacts');

const { HttpError } = require('../../helpers');
const addSchema = require('../../schemas/contacts');

const addNewContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, 'missing required name field');
    }
    const { name, email, phone } = req.body;
    const data = await addContact({ name, email, phone });
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
