// $('.nav-item').click(function() {
// var target = $(this);

// console.log(target);

// if (target == 'Apple') {
//   $(.apple).removeClass('hide');
// } else if (target == 'Nike') {
//   $(.nike).removeClass('hide');
// } else if (target == 'Disney') {
//   $(.disney).removeClass('hide');
// } else if (target == 'Vogue') {
//   $(.vogue).removeClass('hide');
// }
// }

// }

// }
 
// });

$('.nav-item').click(function() {
  var img = $(this).data('img');
  var classname = $(this).data('classname');
  var img_to_show = '<div class= "logo ' + classname + '"> <img src="assets/img/' + img + '" /> </div>';
  $('.content').prepend(img_to_show);

});

  // $('.content').append('img_to_show');
  $('.content').prepend('img_to_show');

  
 
 

});

