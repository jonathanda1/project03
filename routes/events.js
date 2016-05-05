var express = require('express');
var router = express.Router();


var eventController = require('../controllers/event');

router.post('/', eventController.create);

module.exports = router;
