const scrollIntoView = () => {
  const arrow = document.querySelector ('.arrow_down');
  const worksection = document.querySelector('#work');
  const down = document.querySelector('.downward');
  const up = document.querySelector('.upward')
  const introsection = document.querySelector('#intro');
  const work_down = document.querySelector('.work_downward');
  const portfolio = document.querySelector('.portfolio');
  const homeContact = document.querySelector('#contact');
  const curlyArrow = document.querySelector('.curly-arrow');

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


if (up) {
up.addEventListener("click", () => {
  introsection.scrollIntoView({behavior:"smooth"});


});
};


if (work_down) {
work_down.addEventListener("click", () => {
  portfolio.scrollIntoView({behavior:"smooth"});
});
};

if (curlyArrow) {
curlyArrow.addEventListener("click", () => {
  homeContact.scrollIntoView({behavior:"smooth"});
});
};



}

export { scrollIntoView }

