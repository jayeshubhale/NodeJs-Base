const express = require('express');
const { addSportsNameController, getAllSportsDataController } = require('../controllers/addSportsController.js');

const router = express.Router();

// routes
router.post('/sports/name', addSportsNameController);

router.get('/sports/getAllSportsData', getAllSportsDataController)

 
// export
module.exports = router;


