var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    name: String,
});

var userSchema = new mongoose.Schema({
    username: String,
    artists: [artistSchema]
});

var User = mongoose.model('User', userSchema);
module.exports = User;
