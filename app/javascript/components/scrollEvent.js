const scrollEvent = () => {

let navBar = document.querySelector('.navbar_cookpal');
let section = document.querySelectorAll('.sec');
let mastHead = document.querySelector('.about-page');
let navLinks = document.querySelectorAll('.navbar_cookpal a.dot');
let lastScrollTop = 0;
let header =  document.querySelector ('.PDP-header');
let logo = document.querySelector ('.logo_linlu');
let uptoNext = document.querySelector('.cookpal_nav_about');
let arrow = document.querySelector('.cookpal_nav_arrow ');
if (navBar){
window.onscroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
  header.style.top = '-40px';
  logo.style.top = '-40px';
  uptoNext.style.top = '-40px';
  arrow.style.top = '-40px';

} else {
  header.style.top = '0';
 logo.style.top = '5px';
 uptoNext.style.top = '6px';
 arrow.style.top = '5px';
}
lastScrollTop = scrollTop;
  if (pageYOffset > mastHead.clientHeight - 120) {
    navBar.classList.add("navbar_cookpal_show");
      let current = '';
  section.forEach(sec => {
    // let top = window.scrollY;

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

  } else {
    navBar.classList.remove("navbar_cookpal_show");
  }
}
}
}


// const headerUp = () => {
// let lastScrollTop = 0;
// let header =  document.querySelector ('.PDP-header');
// let logo = document.querySelector ('.logo_linlu');
// if (header) {
// window.onscroll = () => {

//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// if (scrollTop > lastScrollTop) {
//   header.style.top = '-40px';
//   logo.style.top = '-40px';

// } else {
//   header.style.top = '0';
// logo.style.top = '5px';
// }
// lastScrollTop = scrollTop;
//     }
//   }
// }


export { scrollEvent }
