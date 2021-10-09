const moveCalendar = () => {
const calendar = document.querySelector('.calendarMove');
if (calendar){
window.addEventListener('scroll', ()=> {
const scrolled = window.pageYOffset;
const val = scrolled * 0.5;
calendar.style.transform = `translateX(${0.5 * val}%)`;
calendar.style. height = `${0.7 * val}px`;
calendar.style. width = `${0.7 * val}px`;

})

}
}

export {moveCalendar}
