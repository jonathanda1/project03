var Event = require('../models/event')
var request = require('request')

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
      event.users = req.body.users

      event.save(function(err, savedEvent){
        if(err) console.log(err)
          console.log('saved...?')
          res.json(savedEvent)
          console.log(savedEvent)
      })

    }
      // event.users =[req.user._id]
  })



}



module.exports = {
  index: index,
  create: create
};
