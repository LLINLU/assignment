const burgerMenu = () => {
const menuBtn = document.querySelector('.hamburger');
let menuopen = false;
menuBtn.addEventListener('click', () => {
  if(!menuopen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

}

export { burgerMenu }
