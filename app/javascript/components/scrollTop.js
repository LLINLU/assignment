
const scrollTop = () => {
  const btn = document.querySelector ('#button');
  if(btn){

  let btnPosition = btn.getBoundingClientRect().top;

  let screenPosition = window.innerHeight;
  let windowTop = window.pageYOffset;
  let documentHeight= document.documentElement.scrollHeight;

//    if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {

    if (windowTop + screenPosition > documentHeight - 30) {

      btn.classList.add('show-footer');
    }
    else  {
      btn.classList.remove('show-footer');
    }
  }
  }

window.addEventListener('scroll',scrollTop)

export {scrollTop}
