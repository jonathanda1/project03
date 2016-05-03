// We created this file
console.log("hi")

// Slider trigger
$(document).ready(function () {
       $('.slider').slider({full_width: true,
                            interval: 3500,
                            transition: 800,
       });
   });


// Modal trigger
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
