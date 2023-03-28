const { Contact, addSchema } = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const addNewContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, 'missing required name field');
    }
    const { name, email, phone } = req.body;
    const data = await Contact.create({ name, email, phone });
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
