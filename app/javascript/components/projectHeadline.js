const headlineAppear = () => {
  const popupHl= document.querySelector ('.popupHl');
  if(popupHl){

  let HlPosition = popupHl.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 1.2;

    if (HlPosition < screenPosition) {

      popupHl.classList.add('intro-appear');
    }
    else if (HlPosition >= screenPosition && true) {
      popupHl.classList.remove('intro-appear');
    }
  }
  }

window.addEventListener('scroll',scrollApear)

export {headlineAppear}
