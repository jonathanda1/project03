console.log("hi 2")

$('#search-button').click(function(event){
  console.log('clicked')
  var name = $('#search-string').val()
console.log(name)
  $.ajax({
    method: 'GET',
    url: '/api/artist/name/events',
    success: function(data){
      var eventlist = data
      console.log(eventlist)
    }
  }
  );
});



$('.show-button').click(function(event) {
  console.log('clicked')
})
