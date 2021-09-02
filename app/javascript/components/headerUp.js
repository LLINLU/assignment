const headerUp= () => {
let lastScrollTop = 0;
let header =  document.getElementById ('PDP-header');
if (header) {
window.onscroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
  header.style.top = '-40px';
} else {
  header.style.top = '0px';
}
lastScrollTop = scrollTop;
    }
  }
}


export { headerUp}
