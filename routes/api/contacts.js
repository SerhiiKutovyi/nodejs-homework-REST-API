const express = require('express');
const router = express.Router();

const { isValidId, authenticate, validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const { ctrlWrapper } = require('../../helpers');
const ctrl = require('../../controllers/contacts');

router.get('/', ctrlWrapper(authenticate), ctrlWrapper(ctrl.getAllContacts));

router.get(
  '/:id',
  ctrlWrapper(authenticate),
  isValidId,
  ctrlWrapper(ctrl.getById)
);

router.post(
  '/',
  ctrlWrapper(authenticate),
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addNewContact)
);

router.put(
  '/:id',
  ctrlWrapper(authenticate),
  validateBody(schemas.addSchema),
  isValidId,
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:id/favorite',
  ctrlWrapper(authenticate),
  validateBody(schemas.updateFavoriteSchema),
  isValidId,
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete(
  '/:id',
  ctrlWrapper(authenticate),
  isValidId,
  ctrlWrapper(ctrl.removeById)
);

module.exports = router;
