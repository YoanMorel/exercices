$(function() {
  var square = $('#square');

  $('#field').keydown(function(event) {
    if (event.which == 39) { // touche droite
      square.offset({
        left: square.offset().left + 10
      });
      if (square.offset().left >= $(window).width()) {
        square.offset({
          left: 0
        });
      }
    } else if (event.which == 37) { // touche gauche
      square.offset({
        left: square.offset().left - 10
      });
      if (square.offset().left < (square.width() * -1)) {
        square.offset({
          left: ($(window).width() - square.width())
        });
      }
    } else if (event.which == 38) { // touche haut
      square.offset({
        top: square.offset().top - 10
      });
      if (square.offset().top < (square.height() * -1)) {
        square.offset({
          top: ($(window).height() - square.height())
        });
      }
    } else if (event.which == 40) { // touche bas
      square.offset({
        top: square.offset().top + 10
      });
      if (square.offset().top >= $(window).height()) {
        square.offset({
          top: 0
        })
      }
    } else {
      alert('Il faut utiliser les touches de directions !');
    }
  });
});
