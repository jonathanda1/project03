var Event = require('../models/event');

module.exports = {
  create: create,
  delete: del
};

function create(req, res) {
console.log(req.body)
var comment = req.body.comment;
var event = req.user;
user.comments.push({text: comment})
event.save(function(err){
  res.json(event);
})

}

function del(req, res) {

}
