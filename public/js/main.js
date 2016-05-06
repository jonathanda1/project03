
console.log("main")

var $searchedEvent = $("searched-event-list");

$('#cancel-button').click(function(event) {
  $('#searched-event-list').html('')
});


function addComment() {
  console.log('clicked')
  console.log($("#textarea1").val())
  $.ajax ({
    method: "POST",
    url: "/api/comments",
    data: {
          comment: $("#textarea1").val(),
          eventId: window.location.href.split('/').pop()
          }
  }).then(function(data) {
    $("#textarea1").val('')
    console.log(data)
  })
}

$(document).on("click", "#comment", addComment)



// $("#comment").click(function() {
//   var text = $("#textarea1").val()
//   console.log("clicked")
//       $("#chatbox").append("<div class='row'><div class='col s4 m6 offset-m3'><div class='card-panel purple lighten-2 text-black'><span class='white-text'>" + text + "</span></div></div></div>")
//   $("#textarea1").val('')
// })


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
        var searchedEvent = '<div class="eventSample">'+event[i].start_time+' | '+event[i].title+' | '+event[i].venue_name+'<a id=' +i+' class="add-button waves-effect waves-light btn purple accent-2 right text-white">add</a></div><br/>'

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



// Comment box

