const navbarAppear = () => {
let lastScrollTop = 0;
let navbar =  document.querySelector ('.navbar_home');
let logo = document.querySelector ('.brand_logo');
if (navbar) {
window.onscroll = () => {


  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
  navbar.style.top = '-50px';

} else {
  navbar.style.top = '0px';
  navbar.style.height = '40px';

}
lastScrollTop = scrollTop;
    }
  }
}

export { navbarAppear }
