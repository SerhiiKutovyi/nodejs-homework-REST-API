const router = require('express').Router();

const { isValidId } = require('../../middlewares');

const ctrl = require('../../controllers/contacts');

router.get('/', ctrl.getAllContacts);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', ctrl.addNewContact);

router.put('/:id', isValidId, ctrl.updateById);

router.patch('/:id/favorite', isValidId, ctrl.updateFavorite);

router.delete('/:id', isValidId, ctrl.removeById);

module.exports = router;
