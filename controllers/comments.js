var Event = require('../models/event');

module.exports = {
  create: create,
};

function create(req, res) {
var comment = req.body.comment;
var eventId = req.body.eventId;
Event.findById(eventId, function (err, event) {
  if (err) console.log(err)
  event.comment.push({text: comment});
  event.save(function(err, event) {
    if (err) console.log(err)
      console.log(event);
  })
})
// Event.comments.push({text: comment})
// Event.save(function(err){
//   res.json(event);
//   })
};

