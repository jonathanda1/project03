
console.log("main")

var $searchedEvent = $("searched-event-list");


$('#search-button').click(function(event){
  console.log('clicked')
  var name = $('#search-string').val()
console.log(name)
   $.ajax({
    method: 'GET',
    url: '/api/artist/'+name+'/events',
   success: function(data){
       var eventlist = data
       var event = eventlist.events.event
             $('#searched-event-list').append('<h4>Upcoming events for '+name+'</h4>')
       for(i=0; i<event.length; i++){
        var searchedEvent = '<div class="eventSample">'+event[i].start_time+' | '+event[i].title+' | '+event[i].venue_name+'<a class="waves-effect waves-light btn purple accent-2 right">add</a></div><br/>'

          $('#searched-event-list').append(searchedEvent)
       }
   }
 });
})





$('.add-button').click(function(e) {
  console.log('clicked')
})
