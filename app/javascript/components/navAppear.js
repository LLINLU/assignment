const navAppear = () => {

let navLinks = document.querySelector('.navbar_cookpal');
let mastHead = document.querySelector('.about-page');
if (mastHead){
window.onscroll = () => {
  if (pageYOffset > mastHead.clientHeight - 120) {
    navLinks.classList.add("navbar_cookpal_show");
  } else {
    navLinks.classList.remove("navbar_cookpal_show");
  }
}
}
}

export { navAppear }
