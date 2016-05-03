var mongoose = require('mongoose')

var venueSchema = new mongoose.Schema({
  name: String,
  address: String,
  url: String,
  lat: Number,
  lng: Number,
  events: {
    type:mongoose.Schema.types.ObjectId,
      ref: 'Event'
  }
})

var Venue = mongoose.model("Venue", venueSchema)

module.exports = Venue
