const intersectionObserver =() =>{

const skillSection = document.querySelector('.skill_block');
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
}
export {intersectionObserver}
