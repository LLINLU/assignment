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


// const scrollSpy = () => {
// let section = document.querySelectorAll('.sec');
// let navLinks = document.querySelectorAll('.navbar_cookpal a.dot');
// window.onscroll = () => {
//   section.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop-300;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('.navbar_cookpal a[href*=' + id + ']').classList.add
//         ('active');
//       })
//     }

//   })
// }

// }
// export { scrollSpy }


const scrollSpy = () => {
let section = document.querySelectorAll('.sec');
let navLinks = document.querySelectorAll('.navbar_cookpal a.dot');

if (navLinks) {
window.onscroll = () => {
  let current = '';
  section.forEach(sec => {
    // let top = window.scrollY;
    console.log(pageYOffset);
    let sectionTop = sec.offsetTop-300;
    let sectionHeight = sec.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3) {
      current  = sec.getAttribute('id');
    }
  })
  navLinks.forEach (li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
}
}
}

export { scrollSpy }

