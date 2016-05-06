var express = require('express');
var router = express.Router();
var User = require('../models/user')
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Groupy', user: req.user });
});

router.get('/artist', function(req, res, next) {
  res.render('artist', { title: 'Groupy', user: req.user });
});

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Groupy', user: req.user })
})

// Event index page
router.get('/event_index', function(req, res, next) {
  res.render('event_index', { title: 'Groupy', user: req.user})
})

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users/user',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
