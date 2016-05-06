
console.log("main")

var $searchedEvent = $("searched-event-list");

$('#cancel-button').click(function(event) {
  $('#searched-event-list').html('')
});

$('#search-button').click(function(event){
  console.log('clicked')
  var name = $('#search-string').val()
console.log(name)
   $.ajax({
    method: 'GET',
    url: '/api/artist/'+name+'/events',
   success: function(data){
       var eventlist = data
       if(eventlist.events != null) var event = eventlist.events.event
       console.log('herehere event: '+ event)
       if(!event){
          $('#searched-event-list').append('<h4>No events found for '+name+'</h4>')
       }else{
        console.log('FOUND EVENT')
             $('#searched-event-list').append('<h4>Upcoming events for '+name+'</h4>')
       for(i=0; i<event.length; i++){
        var searchedEvent = '<div class="eventSample">'+event[i].start_time+' | '+event[i].title+' | '+event[i].venue_name+'<a id=' +i+' class="add-button waves-effect waves-light btn purple accent-2 right">add</a></div><br/>'

          $('#searched-event-list').append(searchedEvent)
          $('#'+i).data({
            venue: event[i].venue_name,
            venueAddress: event[i].venue_address,
            city: event[i].city_name,
            state: event[i].region_name,
            venueUrl: event[i].venue_url,
            title: event[i].title,
            date: event[i].start_time,
            imageUrl: event[i].image.medium.url || '#',
            users: [],
            eventfulId: event[i].id
          })

       }
      }
    },
    failure: function(){
      console.log('NO EVENTS - FAILURE')
    }
 });
})


$(document).on('click', '.add-button', function(){
  var eventData = $('#'+this.id).data()
  $.post('/events', eventData, function(data) {
    console.log(data)
  })
})


// appending divs + form value to #chatbox
// $("#comment").click(function () {
//  $("#chatbox").append("<div>" + $("#textarea1").val() + "</div>")
//   $("#textarea1").val('')
// })

// $(document).ready(function() {
//   $("#comment").click(function() {
//     var text = $("#textarea1").val()
//     console.log("clicked")
//     $("#chatbox").append("<div>"+ text +"</div>")
//     $("#textarea1").val('')
//   })
// })

// Comment box
$("#comment").click(function() {
  var text = $("#textarea1").val()
  console.log("clicked")
      $("#chatbox").append("<div class='row'><div class='col s4 m6 offset-m3'><div class='card-panel purple lighten-2 text-black'><span class='white-text'>" + text + "</span></div></div></div>")
  $("#textarea1").val('')
})
