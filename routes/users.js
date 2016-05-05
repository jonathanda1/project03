var express = require('express');
var router = express.Router();
var User = require('../models/user');

var userController = require('../controllers/user');
/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.render('profile', { title: 'Groupy', user: req.user});
});

router.put('/user/:id', userController.update)

module.exports = router;

