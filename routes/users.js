var express = require('express');
var router = express.Router();
var User = require('../models/user');


var userController = require('../controllers/user');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  if (req.user) {
    res.render('profile', { title: 'Groupy', user: req.user});
  } else {
    res.redirect('/')
  };
});

router.put('/user/:id', userController.update)

module.exports = router;

