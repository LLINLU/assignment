

const leafSlide = () => {
  const leaf = document.querySelector(".leaf");
  if(leaf){
  const tl = new  TimelineMax();
  tl.fromTo(
    leaf,
    1,
    {opacity: 0, x:30},
    {opacity: 0.7, x:20},
    "-=0.5"
  )
  .fromTo(
    leaf,
    5.2,
    {width: '180px'},
    {width: '230px', ease: Power2.easeInOut },
    "-=1.2"
  )



  // .fromTo(text, 4.5, {opacity: 0, x: 30}, {opacity: 1, x: 0},
  // "-=0.5"
  // )
  //   .fromTo(
  //    nav,
  //    1,
  //    {height: "0%", opacity: 0},
  //    {height: "100%", ease: Power2.easeInOut, opacity:1},
  //    "-=3.5"
  // );
}}

export { leafSlide }
