const router = require('express').Router();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../models/contacts');

router.get('/', async (req, res, next) => {
  try {
    const data = await listContacts();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await getContactById(req.params.id);
    if (!data) {
      const error = new Error('Not found');
      error.status = 404;
      throw error;
    }
    res.json(data);
  } catch (error) {
    const { status = 500, message = 'Server error' } = error;
    res.status(status).json({
      message,
    });
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const data = await addContact({ name, email, phone });
    if (req.body !== name || req.body !== email || req.body !== phone) {
      res.status(400).json({
        message: 'missing required name field',
      });
      return;
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = await removeContact(req.params.id);
    if (!data) {
      res.status(404).json({
        message: 'Not found',
      });
      return;
    } else {
      res.json({
        message: 'contact deleted',
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    });
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const data = await updateContact(req.params.id);
    console.log('data', data);
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    });
  }
  res.json({ message: 'template message' });
});

module.exports = router;
