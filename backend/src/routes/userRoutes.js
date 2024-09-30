const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register user
router.post('/register', userController.register);

// Login user
router.post('/login', userController.login);

// Get user dashboard
router.get('/dashboard', auth, userController.getDashboard);

// Get user profile
router.get('/profile', auth, userController.getProfile);

// Update user profile
router.put('/profile', auth, userController.updateProfile);

module.exports = router;
