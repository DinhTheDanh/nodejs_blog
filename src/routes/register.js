const express = require('express');
const router = express.Router();

const registerController = require('../app/controllers/RegisterController');

router.post('/signup', registerController.register);
router.get('/', registerController.show);

module.exports = router;
