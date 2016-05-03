var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    location: String,
    artist: String,
    time: Date,
})

var Event = mongoose.model('Event', eventSchema);
module.exports = Event;
