const scrollIntoView = () => {
  const arrow = document.querySelector ('.arrow_down');
  const worksection = document.querySelector('#work');
  const down = document.querySelector('.downward');
  const introsection = document.querySelector('#intro');

if (arrow) {

arrow.addEventListener("click", () => {
  worksection.scrollIntoView({behavior:"smooth"});



});

};

if (down) {
down.addEventListener("click", () => {
  introsection.scrollIntoView({behavior:"smooth"});



});



};
}

export { scrollIntoView }
