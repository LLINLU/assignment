const burgerMenu = () => {
const menuBtn = document.querySelector('.hamburger');
const links = document.querySelector('.nav-link-sp');
const navs = document.querySelectorAll('.nav-link-sp li');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    console.log('d');
    menuBtn.classList.add('open');
    links.classList.add('openmenu');
    navs.forEach(nav => {
      link.classList.add('fade');
    });
    }
    menuOpen = true;


  }
  else {
    console.log('w')
    menuBtn.classList.remove('open');
    links.classList.remove('openmenu');
    navs.forEach(nav => {
      link.classList.remove('fade');
      });
    menuOpen = false;
  }
});

}

export { burgerMenu }
