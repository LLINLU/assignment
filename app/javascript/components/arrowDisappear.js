const arrowDisappear = () => {
  const arrow = document.querySelector ('.arrow_down');



window.addEventListener("scroll", () => {
  let arrowPosition = arrow.getBoundingClientRect().top;

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
