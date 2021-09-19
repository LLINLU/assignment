const navbarAppear = () => {
let lastScrollTop = 0;
let navbar =  document.querySelector ('.navbar_home');
let logo = document.querySelector ('.brand_logo');
if (navbar) {
window.onscroll = () => {
  console.log('ddd');

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
  navbar.style.top = '-50px';
  logo.style.visibility='visible';


  // logo.style.top = '-40px';

} else {
  navbar.style.top = '0px';
  navbar.style.height = '40px';
  // navbar.style.backgroundColor = '#F5E4EB';
  logo.style.visibility='hidden';

// logo.style.top = '5px';
}
lastScrollTop = scrollTop;
    }
  }
}

export { navbarAppear }
