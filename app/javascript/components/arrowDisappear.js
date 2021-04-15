const arrowDisappear = () => {
  const arrow = document.querySelector ('.arrow_down');

let arrowPosition = arrow.getBoundingClientRect().top;

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;
  if (currentScroll <= arrowPosition) {
    arrow.style.display = "block"

  } else {


    // down
 arrow.style.display = "none"

  }

});
}

export { arrowDisappear }
