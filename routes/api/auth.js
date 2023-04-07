const express = require('express');
const router = express.Router();

const { ctrlWrapper } = require('../../helpers');

const ctrl = require('../../controllers/auth');

router.post('/register', ctrlWrapper(ctrl.register));

router.post('/login', ctrlWrapper(ctrl.login));

module.exports = router;
