const navSpEvent = () => {

let navSpBar = document.querySelector('.nav-home-sp');
let hamburger = document.querySelector('.hamburger')
let lastScrollTop = 0;
if(navSpBar){
  window.onscroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
  navSpBar.style.top = '-60px';
   hamburger.style.top = '-48px';

} else {
  navSpBar.style.top = '0';
    hamburger.style.top = '3px';
}
lastScrollTop = scrollTop;
}
}
}



export { navSpEvent }
