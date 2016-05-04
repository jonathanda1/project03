 var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.render('profile', { title: 'Groupy', user: req.user});
});

router.put('/user', function(req, res, next){
  var eventId = req.body.eventfulId

  console.log(req.user._id)
  User.findById(req.user._id, function(err, user){
    if(err) res.json(err)
      user.events.push(eventId)
      user.save(function(err, updatedUser){
        res.json(updatedUser)
      })
  })
})

module.exports = router;

