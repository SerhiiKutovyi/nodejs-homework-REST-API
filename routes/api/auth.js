const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');
const ctrl = require('../../controllers/auth');

const { validateBody, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');

router.post(
  '/register',
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verify));

router.post(
  '/verify',
  validateBody(schemas.verifySchema),
  ctrlWrapper(ctrl.resendEmail)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get('/current', ctrlWrapper(authenticate), ctrlWrapper(ctrl.getCurrent));

router.get('/logout', ctrlWrapper(authenticate), ctrlWrapper(ctrl.getLogout));

router.patch(
  '/avatars',
  ctrlWrapper(authenticate),
  upload.single('avatar'),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
