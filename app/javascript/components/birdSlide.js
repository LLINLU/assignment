const birdAppear = () => {
  // const num = document.querySelector ('.js-number');
  const bird = document.querySelectorAll ('.hima');
  if(introText){
  bird.forEach(bird) => {

  let birdPosition = bird.getBoundingClientRect().top;

  let screenPosition = window.innerWidth / 1.2;

    if (birdPosition < screenPosition) {

     bird.classList.add('intro-appear');
    }
    else if (numPosition >= screenPosition && true) {
      num.classList.remove('intro-appear');
    }
  }
}
}

window.addEventListener('scroll',birdAppear)

export {birdAppear}
