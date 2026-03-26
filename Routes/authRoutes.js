const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

router.post('/login', authController.generateToken);

module.exports = router;