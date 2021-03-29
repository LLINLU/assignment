const himaAppear = () => {
  // const num = document.querySelector ('.js-number');
  const bird = document.querySelector('.hima');
  if(bird){


  let birdPosition = bird.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 1.1;

    if (birdPosition < screenPosition) {

     bird.classList.add('intro-appear');
    }
    else if (birdPosition >= screenPosition && true) {
      bird.classList.remove('intro-appear');
    }
  }



}


window.addEventListener('scroll', himaAppear)

export {himaAppear}
