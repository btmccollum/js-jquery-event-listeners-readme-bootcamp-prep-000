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
  $('form').on('keydown', function() {
    var key = e.key;
    if ( key === e.key) {
      alert('You\'ve pressed the \'G\' key!');
    }
  });
}

$(document).ready(function(){

// call functions here

});
