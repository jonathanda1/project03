var express = require('express');
var router = express.Router();
var artistController = require('../controllers/artist');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.json(req.user);
});


router.get('/artist/:name/events', artistController.show)
module.exports = router;
