const intersectionObserver =() =>{

const skillSection = document.querySelector('.skill_block');
const whiteboardR = document.querySelector('.whiteboard_right');
const whiteboardL = document.querySelector('.whiteboard_left');
const sliders = document.querySelectorAll('.slide-in');
const  options = {};
if(skillSection) {
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry.target);
  });
},
options);

observer.observe(skillSection);
}

if(slider) {
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  };
  const appearOnscroll = new IntersectionObserver(function(
    entries,
    appearOnscroll) {
    entries.forEach(entry =>{
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('boardappear');
        appearOnscroll.unobserve(entry.target);
      }
    })
  },
    appearOptions);

  sliders.forEach(slider => {
    appearOnscroll.observe(slider);
  });
}



}
export {intersectionObserver}
