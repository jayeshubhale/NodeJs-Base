const express = require('express');
const { testUserController } = require('../controllers/testingController');

const router = express.Router();

// routes
router.get('/testing', testUserController);

// export
module.exports = router;
