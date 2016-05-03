// We created this file
$(document).ready(function () {
       $('.slider').slider({full_width: true,
                            interval: 1000,
                            transition: 800,
       });
   });

// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
