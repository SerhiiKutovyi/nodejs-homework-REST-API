const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');
const ctrl = require('../../controllers/auth');

const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/user');

router.post(
  '/register',
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

module.exports = router;
