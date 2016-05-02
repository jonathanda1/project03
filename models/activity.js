var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    hours: Number
})

var Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
