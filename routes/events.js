var express = require('express');
var router = express.Router();


var eventController = require('../controllers/event');

router.post('/', eventController.create);

router.get('/:id', eventController.show)


module.exports = router;
