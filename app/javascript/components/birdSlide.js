const birdAppear = () => {
  // const num = document.querySelector ('.js-number');
  const bird = document.querySelector('.self-picture');
  if(bird){


  let birdPosition = bird.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 2;

    if (birdPosition < screenPosition) {

     bird.classList.add('intro-appear');
    }
    else if (birdPosition >= screenPosition && true) {
      bird.classList.remove('intro-appear');
    }
  }





}


window.addEventListener('scroll', birdAppear)；

export {birdAppear}
