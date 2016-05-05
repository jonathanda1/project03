 var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  if (req.user) {
    res.render('profile', { title: 'Groupy', user: req.user});
  } else {
    res.redirect('/')
  };
});

router.put('/user', function(req, res, next){
  var eventId = req.body.eventfulId

  console.log(req.user._id)
  User.findById(req.user._id, function(err, user){
    if(err) res.json(err)
      if(user.events.indexOf(eventId)==-1){

        user.events.push(eventId)
        user.save(function(err, updatedUser){
          res.json(updatedUser)
        })
      }
      //check if event exists in db
      //create event in database

    })
})

module.exports = router;

