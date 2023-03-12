const router = require('express').Router();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
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
      res.status(404).json({
        message: 'Not found',
      });
      return;
    }
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
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
  res.json({ message: 'template message' });
});

module.exports = router;
