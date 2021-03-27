const birdAppear = () => {
  // const num = document.querySelector ('.js-number');
  const bird = document.querySelector('.self-picture');
  const picture = documnet.querySelector('.hima');
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


   if(picture){


  let picPosition = picture.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 2;

    if (picPosition < screenPosition) {

     picture.classList.add('intro-appear');
    }
    else if (picPosition >= screenPosition && true) {
      pic.classList.remove('intro-appear');
    }
  }


}


window.addEventListener('scroll', birdAppear)

export {birdAppear}
