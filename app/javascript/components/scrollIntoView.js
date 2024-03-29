const scrollIntoView = () => {
  const sm_down = document.querySelector('.sm-down');
  const sm_overview = document.querySelector('.sm-overview');
  const arrow = document.querySelector ('.arrow_down');
  const worksection = document.querySelector('#work');
  const down = document.querySelector('.downward');
  const up = document.querySelector('.upward')
  const introsection = document.querySelector('#intro');
  const work_down = document.querySelector('.work_downward');
  const portfolio = document.querySelector('.portfolio');
  const homeContact = document.querySelector('#contact');
  const curlyArrow = document.querySelector('.curly-arrow');
  const cookpal_down = document.querySelector('.cookpal-down');
  const cookpal_overview = document.querySelector('.cookpal_overview');


if (arrow) {

arrow.addEventListener("click", () => {
  worksection.scrollIntoView({behavior:"smooth"});
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

if (cookpal_down) {
  cookpal_down.addEventListener("click", () => {
  cookpal_overview.scrollIntoView({behavior:"smooth"});
});
};

if (sm_overview) {
  sm_down.addEventListener("click", () => {
  sm_overview.scrollIntoView({behavior:"smooth"});
});
};


}

export { scrollIntoView }

