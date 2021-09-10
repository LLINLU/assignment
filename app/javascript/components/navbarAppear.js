const navbarAppear = () => {
let lastScrollTop = 0;
let navbar =  document.querySelector ('.navbar_home');
let logo = document.querySelector ('.brand_logo');
if (navbar) {
window.onscroll = () => {

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
  navbar.style.top = '-55x';
  // logo.style.top = '-40px';

} else {
  navbar.style.top = '0';
// logo.style.top = '5px';
}
lastScrollTop = scrollTop;
    }
  }
}

export { navbarAppear }
