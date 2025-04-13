const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');

router.post('/login', loginController.login);
router.get('/', loginController.show);

module.exports = router;
