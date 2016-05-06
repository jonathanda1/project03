var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  text: String,
  author: String
})

var eventSchema = new mongoose.Schema({
    venue: String,
    venueAddress: String,
    venueUrl: String,
    city: String,
    state: String,
    title: String,
    date: Date,
    imageUrl: String,
    users: Array,
    eventfulId: String,
    comment: [commentSchema]
})

var Event = mongoose.model('Event', eventSchema);
module.exports = Event;
