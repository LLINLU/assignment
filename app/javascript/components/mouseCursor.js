const mouseCursor = () => {
  if (screen.width >= 481) {
  let mouseCursor = document.querySelector('.cursor');
  window.addEventListener('mousemove',cursor);
  function cursor(e){
    mouseCursor.style.top =e.pageY + 'px';
    mouseCursor.style.left =e.pageX + 'px';
  }
}
}

const hoverChange = () => {
  let navLinks = document.querySelectorAll('.nav-link li a');
  let mouseCursor = document.querySelector('.cursor');
  let learnMore = document.querySelector('#learn-more');
  let headlines = document.querySelectorAll('.js-headline')
  let contactBtns = document.querySelectorAll('.btn-contact')
  navLinks.forEach(link => {
    link.addEventListener('mouseleave',() => {
      mouseCursor.classList.remove('link-grow');
      // link.classList.remove('hovered-link');

    });
    link.addEventListener('mouseover',() => {
      mouseCursor.classList.add('link-grow');
      // link.classList.add('hovered-link');
    });
  });

  learnMore.addEventListener('mouseleave',() => {
      mouseCursor.classList.remove('button-grow');
      // learnMore.classList.remove('hovered-button');

    });
   learnMore.addEventListener('mouseover',() => {
      mouseCursor.classList.add('button-grow');
      // learnMore.classList.add('hovered-button');

    });
   // headline.addEventListener('mouseleave',() => {
   //    mouseCursor.classList.remove('button-grow');
   //    console.log('hello');
   //    // learnMore.classList.remove('hovered-button');

   //  });
   // headline.addEventListener('mouseover',() => {
   //    mouseCursor.classList.add('button-grow');
   //    // learnMore.classList.add('hovered-button');
   //     console.log('hello');

   //  });

   // contactBtn.addEventListener('mouseleave',() => {
   //    mouseCursor.classList.remove('button-grow');
   //    // learnMore.classList.add('hovered-button');


   //  });

   //  contactBtn.addEventListener('mouseover',() => {
   //    mouseCursor.classList.add('button-grow');
   //    // learnMore.classList.add('hovered-button');
   //     console.log('good');

   //  });

    contactBtns.forEach(contactBtn => {
      contactBtn.addEventListener('mouseleave',() => {
      mouseCursor.classList.remove('button-grow');

    });
      contactBtn.addEventListener('mouseover',() => {
      mouseCursor.classList.add('button-grow');
      // link.classList.add('hovered-link');
    });

    });

    headlines.forEach(headline => {
      headline.addEventListener('mouseleave',() => {
      mouseCursor.classList.remove('button-grow');

    });
      headline.addEventListener('mouseover',() => {
      mouseCursor.classList.add('button-grow');
      // link.classList.add('hovered-link');
    });

    });

}


const linkChange =() => {
  let navLinks = document.querySelectorAll('.nav-link li a');
  let mouseCursor = document.querySelector('.cursor');
  navLinks.forEach(link => {
    let a = link.getBoundingClientRect();
    // console.log(a);

    link.addEventListener('mouseover',(e)=>{
      link.style.setProperty('--x',(e.clientX-a.left+5)+'px');
      link.style.setProperty('--y',(e.clientY-a.top)+'px');

    })
    link.addEventListener('mouseleave',(e)=>{
      link.style.setProperty('--x',(e.clientX-a.top)+'px');
      link.style.setProperty('--y',(e.clientY-a.left)+'px');

    });

  });
}

const formChange = () => {
  let about = document.querySelector('span');
  let mouseCursor = document.querySelector('.cursor');
  if(about){
      let a = about.getBoundingClientRect();
      console.log(a);

      document.body.onmousemove = function(e) {
      about.style.setProperty('--x',(e.clientX-a.left+28)+'px');
      about.style.setProperty('--y',(e.clientY-a.top+84)+'px');
    }
  }

}



export { mouseCursor, hoverChange, formChange, linkChange }
