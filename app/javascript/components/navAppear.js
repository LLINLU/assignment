const navAppear = () => {

let navBar = document.querySelector('.navbar_cookpal');
let section = document.querySelectorAll('.sec');
let mastHead = document.querySelector('.about-page');
let navLinks = document.querySelectorAll('.navbar_cookpal a.dot');
if (mastHead){
window.onscroll = () => {
  if (pageYOffset > mastHead.clientHeight - 120) {
    navBar.classList.add("navbar_cookpal_show");
      let current = '';
  section.forEach(sec => {
    // let top = window.scrollY;

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

  } else {
    navBar.classList.remove("navbar_cookpal_show");
  }
}
}
}


export { navAppear }
