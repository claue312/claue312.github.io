$('.nav-item').click(function() {
 var button_name = $(this).data('button');

 

  }
});

  } else {
  $('.nav-item').removeClass('active');
  $('.content').attr('class', 'column content');
  $('.content').addClass(button_name);

  $('.nav-item').removeClass('active');
  $(this).addClass('active');

  }

  if (button_name =='beyonce') {
    $('.slay').removeClass('hide');
    $(audio)[0].play();
  } else if (button_name =='about') {
    $(.about-text').removeClass('hide);
});


$('.close').click(function() {
  $('.slay').addClass('hide');
  $(audio)[0].pause();
  $('.nav-item').removeClass('active');


});