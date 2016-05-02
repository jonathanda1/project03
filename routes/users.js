 var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.render('profile', { title: 'Groupy', user: req.user });
});

module.exports = router;
