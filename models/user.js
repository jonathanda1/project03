var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    name: String,
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    artists: [artistSchema],
    googleId: String,
    imageUrl: String,
    created: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);
module.exports = User;
