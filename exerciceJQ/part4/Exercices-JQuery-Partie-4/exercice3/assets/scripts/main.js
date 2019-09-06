$(function() {
  var regexTab = [/^[a-zA-Z]+$/, /^[a-zA-Z]+$/, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,3}$/, /^[0-9]{10}$/];

  $('input').focus(function() {
    $(this).css({border: ''});
  });

  $('button').click(function() {
    $('input').each(function(index) {
      if (!$(this).val()) {
        $(this).css({border: '2px solid red'}).val('Non renseigné !');
      } else if ($(this).val() && !regexTab[index].test($(this).val())) {
        $(this).css({border: '2px solid red'}).val('Format de ' + $(this).attr('name') + ' incorrect');
      } else {
        $(this).css({border: '2px solid green'});
      }
    });
  });

//   $('input').focusout(function() {
//     if (!$(this).val()) {
//       $(this).css({border: '2px solid red'}).val('Non renseigné !');
//     } else if ($(this).val() && !regexTab[$(this).attr('id')].test($(this).val())) {
//       $(this).css({border: '2px solid red'}).val('Format de ' + $(this).attr('name') + ' incorrect');
//     } else {
//       $(this).css({border: '2px solid green'});
//     }
//   });
// });
