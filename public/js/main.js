
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
            imageUrl: event[i].image.medium.url || '#',
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

$(document).ready(function() {
  $("#comment").click(function() {
    var text = $("#textarea1").val()
    console.log("clicked")
    $("#chatbox").append("<div class="col s12 m6 offset-m3"> <div class="card-panel purple lighten-2 text-black"><span class="white-text">" + text + "</span></div></div>")
    $("#textarea1").val('')
  })

$.ajax({
  type: "GET",
  url: "/api/user",
}).then(function(user) {

  var event = user.events
  for (var i = 0; i < event.length; i++) {
    $("#event-container").append('<div class="col s12 m3"><div class="card purple lighten-2">'+ event[i].title + '</div></div>')
  }

})





