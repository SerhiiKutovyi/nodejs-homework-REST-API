const router = require('express').Router();

const ctrl = require('../../controllers/contacts');

router.get('/', ctrl.getAllContacts);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.addNewContact);

router.put('/:id', ctrl.updateById);

router.delete('/:id', ctrl.removeById);

module.exports = router;
