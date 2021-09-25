const moveCalendar = () => {
const calendar = document.querySelector('.calendarMove');
if (calendar){
window.addEventListener('scroll', ()=> {
const scrolled = window.pageYOffset;
const val = scrolled * 0.3;
calendar.style.transform = `translateX(${0.45 * val}%)`;
calendar.style. height = `${0.8 * val}px`;
calendar.style. width = `${0.8 * val}px`;



})
}
}

export {moveCalendar}
