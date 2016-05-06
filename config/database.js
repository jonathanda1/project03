var mongoose = require('mongoose');

mongoose.createConnection(process.env.MONGODB_URI);

// database connection event
mongoose.connection.once('open', function (cb) {
  console.log(`Mongoose connected to: ${process.env.MONGODB_URI}`);
});

module.exports = mongoose;
