var User = require('../models/user');


function index(req, res) {
    User.find({}, function(err, users) {
      if (err) return res.status(err.statusCode || 500).json(err);
      res.json(user);
    });
}

function update(req, res, next){
  var eventfulId = req.body.eventfulId

  console.log(req.user._id)
  User.findById(req.user._id, function(err, user){
    console.log('userupdateerr:'+err)
    console.log('userupdateuser:'+event)
    // if(err) console.log(err)
    //   if(user.events.indexOf(eventId)==-1){

    //     user.events.push(eventId)
    //     user.save(function(err, updatedUser){
    //       res.json(updatedUser)
    //     })
    //   }
      //check if event exists in db
      //create event in database

    })
}

module.exports = {
  index: index,
  // searchEvents: searchEvents,
  update: update
};



