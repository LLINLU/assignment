const scrollSpy = () => {
$(document).on('scroll',function(){
  var link = $('.navbar_cookpal a.dot');
  var top = $(window).scrollTop();
  $('.sec').each(function(){
    var id = $(this).attr('id');
    var height = $(this).height();
    var pffset = $(this).offset().top-150;
    if(top >= offset && top <offset + height){
      link.removeClass('active');
    }
  })
})
}

export { scrollSpy }
