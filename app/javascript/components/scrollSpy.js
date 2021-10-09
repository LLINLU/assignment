

const scrollSpy = () => {
let section = document.querySelectorAll('.sec');
let navLinks = document.querySelectorAll('.navbar_cookpal a.dot');

if (navLinks) {
window.onscroll = () => {
  let current = '';
  section.forEach(sec => {
    // let top = window.scrollY;
    console.log(pageYOffset);
    let sectionTop = sec.offsetTop-300;
    let sectionHeight = sec.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3) {
      current  = sec.getAttribute('id');
    }
  })
  navLinks.forEach (li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
    }
  }
}

export { scrollSpy }

