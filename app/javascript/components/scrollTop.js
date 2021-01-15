const scrollTop = () => {
let btn = $('#button')
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
       btn.addClass('show-footer');
  } else {
    btn.removeClass('show-footer');

   }
});
}

export { scrollTop }


