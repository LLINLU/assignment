const headerUp = () => {
let lastScrollTop = 0;
let header =  document.querySelector ('.PDP-header');
let logo = document.querySelector ('.logo_linlu');
if (header) {
window.onscroll = () => {

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
  header.style.top = '-40px';
  logo.style.top = '-40px';

} else {
  header.style.top = '0';
logo.style.top = '5px';
}
lastScrollTop = scrollTop;
    }
  }
}
