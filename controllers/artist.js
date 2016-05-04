var request = require('request')

module.exports = {
  show: show
}

function show(req, res) {

  var baseUri = 'http://api.eventful.com/json/events/search?q=music&category=music'
  var key = '&app_key='+ process.env['EVENTFUL_KEY']

  var searchStr = '&keywords='+req.params.name;
  var location = '&location=United+States'
  request(baseUri+key+searchStr+location, function(err, apiRes, body){
      if(!err && res.statusCode == 200){
      var artistEvents = JSON.parse(body)
      res.json(artistEvents);
    }
  })
}


// /api/artist/ + $("input#artist").val() +  /events
