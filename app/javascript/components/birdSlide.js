const birdAppear = () => {
  // const num = document.querySelector ('.js-number');
  const bird = document.querySelector('.hima');
  if(bird){


  let birdPosition = bird.getBoundingClientRect().top;

  let screenPosition = window.innerWidth / 1.9;

    if (birdPosition < screenPosition) {

     bird.classList.add('intro-appear');
    }
    else if (birdPosition >= screenPosition && true) {
      bird.classList.remove('intro-appear');
    }
  }
}


window.addEventListener('scroll', birdAppear)

export {birdAppear}
