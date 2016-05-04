console.log("main")


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



$('.add-button').click(function(e) {
  console.log('clicked')
})
