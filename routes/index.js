const express = require('express');
const router = express.Router();


const mainController = require('../controller/main');

//metrics
router.get('/api/metrics', mainController.metrics);

//predictions
router.get('/api/predictions', mainController.predictions);

router.get('/', (req, res) => {
    res.json({message: 'working...'});
});

module.exports = router;
