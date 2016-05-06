var renderEvent = _.template(`
  <div class="col s12 m3">
    <div class="card purple lighten-2">
      <div class="card-image">
        <img src="<%= imageUrl %>">
      </div>
      <div class="card-content">
        <p><%= title %></p>
      </div>
      <div class="card-action">
        <a href="/events/<%= _id%>">See this event</a>
      </div>
    </div>
  </div>
  `)

$(document).ready(function () {
  console.log("profile.js loaded")
  $.ajax({
    type: "GET",
    url: "/api/user",
  }).then(function(user) {
    var event = user.events
    for (var i = 1; i < event.length; i++) {
      $("#event-row").append(renderEvent(event[i]))
    }

  })
})
