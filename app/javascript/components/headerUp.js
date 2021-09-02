const headerUp = () => {
let lastScrollTop = 0;
let header =  document.querySelector ('.PDP-header');
if (header) {
window.onscroll = () => {
  console.log('ff');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
  header.style.display = 'none';
  console.log('ddd');
} else {
  header.style.display = 'block';
  console.log('ff');
}
lastScrollTop = scrollTop;
    }
  }
}


export { headerUp }
