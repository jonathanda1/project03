var Event = require('../models/event');


module.exports = {
  create: create,
};

/*function index(req, res) {
    Event.find({}, function(err, events) {
      if (err) return res.status(err.statusCode || 500).json(err);
      res.json(events);
    });
}
*/
function create(req, res) {
var comment = req.body.comment;
var eventId = req.body.eventId;
var author =  req.user.name
console.log('req.user: '+ req.user)
Event.findById(eventId, function (err, event) {
  if (err) console.log(err)
  event.comment.push({text: comment, author: author});
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

