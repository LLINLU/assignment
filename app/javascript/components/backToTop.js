
const backToTop= () => {
  const btnImg = document.querySelector ('#button');
  if(btnImg) {

  btnImg.onclick = () => window.scrollTo({ top: 0, behavior: `smooth` })

    }
  }



export {backToTop}
