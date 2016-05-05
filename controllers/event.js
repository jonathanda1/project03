var Event = require('../models/event')
var request = require('request')
var User = require('../models/user')

var eventEmbed

function index(req, res) {
    Event.find({}, function(err, events) {
      if (err) return res.status(err.statusCode || 500).json(err);
      res.json(events);
    });
}

function create(req, res){
  console.log(req.body);
  Event.findOne({eventfulId: req.body.eventfulId}, function(err, event){
    console.log(err)
    console.log(event)
    if(event==null){
      var event = new Event()
      event.eventfulId = req.body.eventfulId
      event.venue = req.body.venue
      event.title = req.body.title
      event.date = req.body.date
      event.imageUrl = req.body.imageUrl
      event.users = [req.user._id]
    } else {
      event.users.push(req.user._id)
      event.users = event.users.filter (function (v, i, a) { return a.indexOf (v) == i });
    }

    event.save(function(err, savedEvent){
        if(err) console.log(err)
          console.log('saved...?')
          // res.json(savedEvent)
          console.log(savedEvent._id+' is event id')
          eventEmbed = savedEvent
      })



  })

  console.log("req.user: "+req.user)
  User.findById(req.user._id, function(err, user){

    console.log('userErr? '+err)
    console.log('currentUser? '+user)
      user.events.push(eventEmbed)
      // console.log('user.events: '+user.events)
      user.events = user.events.filter (function (v, i, a) { return a.indexOf (v) == i });

    user.save(function(err, savedUser){
        if(err) console.log(err)
          console.log('updated user.events...?')
          res.json(savedUser)
          console.log(savedUser)
      })
  })

}



module.exports = {
  index: index,
  create: create
};
