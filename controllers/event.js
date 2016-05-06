var Event = require('../models/event')
var request = require('request')
var User = require('../models/user')
var Event = require('../models/event')
var moment = require('moment')

var eventEmbed

function index(req, res) {
    Event.find({}, function(err, events) {
      if (err) return res.status(err.statusCode || 500).json(err);
      res.json(events);
    });
}

function create(req, res){
  Event.findOne({eventfulId: req.body.eventfulId}, function(err, event){
    if(event==null){
      console.log('event is null')
      var eventNew = new Event()
      eventNew.eventfulId = req.body.eventfulId
      eventNew.venue = req.body.venue
      eventNew.venueAddress = req.body.venueAddress
      eventNew.venueUrl = req.body.venueUrl
      eventNew.city = req.body.city
      eventNew.state = req.body.state
      eventNew.title = req.body.title
      eventNew.date = req.body.date
      eventNew.imageUrl = req.body.imageUrl
      eventNew.users = [req.user._id]

      console.log("REQUEST: ", req.body)
      console.log("EVENT_NEW: ", eventNew)

      eventNew.save(function(err, savedEvent){
        if(err) console.log(err)
          console.log('savedEvent: '+savedEvent)
          User.findById(req.user._id, function(err, user){
            user.events.push(savedEvent)

            user.events = user.events.filter (function (v, i, a) { return a.indexOf (v) == i });

            user.save(function(err, savedUser){
              if(err) console.log(err)
                res.json(savedUser)
            })
          })
      })
    } else {
      console.log(event)
      event.users.push(req.user._id)
      event.users = event.users.filter (function (v, i, a) { return a.indexOf (v) == i });
      event.save(function(err, savedEvent){
        if(err) console.log(err)
        User.findById(req.user._id, function(err, user){
            user.events.push(savedEvent)

            user.events = user.events.filter (function (v, i, a) { return a.indexOf (v) == i });

            user.save(function(err, savedUser){
              if(err) console.log(err)
                res.json(savedUser)
            })
        })
      })
    }


  })

}


function show(req, res, next){
  Event.findById(req.params.id, function(err, event){
    console.log(err);
    console.log(event.date);
    res.render('event', {event: event, user: req.user, moment: moment});
  })


}

module.exports = {
  index: index,
  create: create,
  show: show
};
