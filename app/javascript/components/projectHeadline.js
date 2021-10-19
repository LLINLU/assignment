const headlineAppear = () => {
  const popupHl= document.querySelector ('.popupHl');
  if(popupHl){

  let HlPosition = popupHl.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 1.2;

    if (HlPosition < screenPosition) {

      popupHl.classList.add('hl-appear');
    }
    else if (HlPosition >= screenPosition && true) {
      popupHl.classList.remove('hl-appear');
    }
  }
  }

window.addEventListener('scroll',scrollApear)

export {headlineAppear}
