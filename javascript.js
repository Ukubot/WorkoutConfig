
$(window).scroll(function() {

    if ($(this).scrollTop()>20)
     {
        $('.header').fadeOut();
     }
    else
     {
      $('.header').fadeIn();
     }
 });

var app = angular.module('myApp', []);

app.controller('ExerciseCtrl', function() {
  this.data = [
    { text: '' },
  ];
});
