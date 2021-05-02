const scrollIntoView = () => {
  const arrow = document.querySelector ('.arrow_down');
  const worksection = document.querySelector('#work');

if (arrow) {

arrow.addEventListener("click", () => {
  worksection.scrollIntoView({behavior:"smooth"});



});
}
}

export { scrollIntoView }

