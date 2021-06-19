const burgerMenu = () => {
const menuBtn = document.querySelector('.hamburger');
const links = document.querySelector('.nav-link-sp')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    console.log('d');
    menuBtn.classList.add('open');
    links.classList.add('openmenu');
    menuOpen = true;
  } else {
    console.log('w')
    menuBtn.classList.remove('open');
    links.classList.remove('openmenu')
    menuOpen = false;
  }
});

}

export { burgerMenu }
