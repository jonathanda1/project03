
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
        var searchedEvent = '<div class="eventSample">'+event[i].start_time+' | '+event[i].title+' | '+event[i].venue_name+'<a id=' +i+' class="add-button waves-effect waves-light btn purple accent-2 right">add</a></div><br/>'

          $('#searched-event-list').append(searchedEvent)
          $('#'+i).data({
            venue: event[i].venue_name,
            title: event[i].title,
            date: event[i].start_time,
            imageUrl: event[i].image.medium.url,
            users: [],
            eventfulId: event[i].id
          })

       }
       $('.add-button').click(function(e) {


        // .then(function(event){
        //   console.log('ajax worked')
        //   console.log(event)
        // })
        // $.post('/events', {event: event[e.target.id]}, function(data) {
        //   console.log(data)
          /*optional stuff to do after success */
        });

      // })
    //    $.ajax({
    //     method: "POST",
    //     url: "users/user",
    //     data: {

    //           },
    //    })

    }
 });
})


$(document).on('click', '.add-button', function(){
  var eventData = $('#'+this.id).data()

  $.get('/api/user', function(user){
    console.log(user._id)
    eventData.users.push(user._id)
    console.log('usersare:'+eventData.users)
    console.log(eventData)
  })



  $.post('/events', eventData, function(data) {
    console.log(data)
  })
})





