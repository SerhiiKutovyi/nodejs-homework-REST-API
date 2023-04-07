const { Contact, schemas } = require('../../models/contact');

const { HttpError } = require('../../helpers');

const addNewContact = async (req, res) => {
  const { error } = schemas.addSchema.validate(req.body);
  console.log(error);
  if (error) {
    throw HttpError(400, 'missing required name field');
  }

  const { id_: owner } = req.user;
  const data = await Contact.create({ ...req.body, owner });
  res.status(201).json(data);
};

module.exports = addNewContact;
