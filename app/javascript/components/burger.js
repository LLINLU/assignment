const burgerMenu = () => {
const menuBtn = document.querySelector('.hamburger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    console.log('d');
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    console.log('w')
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

}

export { burgerMenu }
