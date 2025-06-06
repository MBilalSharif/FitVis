const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Admin Login Route
router.post('/admin-login', authController.adminLogin);

// User Registration Route
router.post('/register', authController.register);

// User Login Route
router.post('/login', authController.login);

module.exports = router;