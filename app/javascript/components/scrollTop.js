// const scrollTop = () => {
// let btn = $('#button')
// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });

//  $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
//        btn.addClass('show-footer');
//   } else {
//     btn.removeClass('show-footer');

//    }
// });
// }

// export { scrollTop }


// const scrollTop = () => {
//   const btn = document.querySelector ('#button');
//   if(btn){

//   let btnPosition = btn.getBoundingClientRect().top;

//   let screenPosition = window.innerHeight / 1.2;

//     if (btnPosition < screenPosition) {

//       btn.classList.add('show-footer');
//     }
//     else if (btnPosition >= screenPosition && true) {
//       btn.classList.remove('show-footer');
//     }
//   }
//   }

// window.addEventListener('scroll',scrollTop)

// export {scrollTop}


const scrollTop = () => {
  const btn = document.querySelector ('#button');
  if(btn){

  let btnPosition = btn.getBoundingClientRect().top;

  let screenPosition = window.innerHeight;
  let windowTop = window.pageYOffset;
  let documentHeight= document.documentElement.scrollHeight;

//    if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {

    if (windowTop + screenPosition > documentHeight - 30) {

      btn.classList.add('show-footer');
    }
    else  {
      btn.classList.remove('show-footer');
    }
  }
  }

window.addEventListener('scroll',scrollTop)

export {scrollTop}
