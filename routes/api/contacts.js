const express = require('express');
const router = express.Router();

const { isValidId, authenticate } = require('../../middlewares');

const { ctrlWrapper } = require('../../helpers');

const ctrl = require('../../controllers/contacts');

router.get('/', authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get('/:id', authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post('/', authenticate, ctrlWrapper(ctrl.addNewContact));

router.put('/:id', authenticate, isValidId, ctrlWrapper(ctrl.updateById));

router.patch(
  '/:id/favorite',
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete('/:id', authenticate, isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
