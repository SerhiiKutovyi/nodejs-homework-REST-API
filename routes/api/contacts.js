const router = require('express').Router();
const Joi = require('joi');

const { HttpError } = require('../../helpers');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../models/contacts');

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const data = await listContacts();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await getContactById(req.params.id);
    if (!data) {
      throw HttpError(404);
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
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
});

router.put('/:id', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, 'missing fields');
    }
    const data = await updateContact(req.params.id, req.body);
    if (!data) {
      throw HttpError(404);
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = await removeContact(req.params.id);
    if (!data) {
      throw HttpError(404);
    }
    res.json({
      message: 'Contact deleted',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
