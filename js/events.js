//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}
function pressIt() {
  $('form').on('keydown', function(e) {
    if ( e.which == 71 ) {
      window.alert('You\'ve pressed the \'G\' key!');
    }
  });
}
function submitIt() {
  
}
$(document).ready(function(){

// call functions here

});
