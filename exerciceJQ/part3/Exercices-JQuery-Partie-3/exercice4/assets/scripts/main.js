const heightRectangle = 10;

$('#bigger').click(function() {
  $('#rectangle').height(function(i, currentHeight) {
    return currentHeight + 10;
  });
  if ($('#rectangle').height() == 100) {
    $('#rectangle').height(heightRectangle);
  }
});

$('#green').click(function() {
  $('#rectangle').css({'background-color': 'green'});
});

$('#resetColor').click(function() {
  $('#rectangle').css({'background-color': 'red'});
});

$('#hideR').click(function() {
  $('#rectangle').fadeOut(1000);
});

$('#showR').click(function() {
  $('#rectangle').fadeIn(1000);
});
