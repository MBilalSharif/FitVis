const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes (require authentication)
router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('trainer', 'admin'));

router.post('/:userId/certificates', trainerController.addCertificate);
router.get('/:userId', trainerController.getTrainerProfile);

module.exports = router;