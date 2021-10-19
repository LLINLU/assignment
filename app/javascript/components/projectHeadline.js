const headlineAppear = () => {
  const popupHls= document.querySelectorAll ('.popupHl');
  if(popupHls){

 popupHls.forEach(popupHl => {
    let HlPosition = popupHl.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 2;

    if (HlPosition < screenPosition) {

      popupHl.classList.add('hl-appear');
    }
    else if (HlPosition >= screenPosition && true) {
      popupHl.classList.remove('hl-appear');
    }
  });
 }
}

window.addEventListener('scroll',headlineAppear)

export {headlineAppear}
