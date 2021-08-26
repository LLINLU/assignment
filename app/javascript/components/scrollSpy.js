// const scrollSpy = () => {
// $(document).on('scroll',function(){
//   var link = $('.navbar_cookpal a.dot');
//   var top = $(window).scrollTop();
//   var offset = $(this).offset() - 150;
// if (link) {
//   $('.sec').each(function(){
//     var id = $(this).attr('id');
//     var height = $(this).height();
//     var offset = $(this).offset().top-150;
//     if(top >= offset && top <offset + height){
//       link.removeClass('active');
//       $('.navbar_cookpal').find('[data-scroll="' + id + '"]').addClass('active');
//     }
//   })
// }

// })
// }

// export { scrollSpy }


const scrollSpy = () => {
let section = document.querySelectorAll('.sec');
let link = document.querySelectorAll('.navbar_cookpal a.dot');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset)

  })
}

}
