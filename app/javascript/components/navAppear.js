const navAppear = () => {

let navLinks = document.querySelectorAll('.navbar_cookpal a.dot');
let mastHead = document.querySelector('.about-page');
if (mastHead){
window.onscroll = () => {
  if (pageYOffset.scrollTop > mastHead.clientHeight ) {
    navLinks.classList.add("navbar_cookpal_show");
  } else {
    navLinks.classList.remove("navbar_cookpal_show");
  }
}
}
}

export { navAppear }
