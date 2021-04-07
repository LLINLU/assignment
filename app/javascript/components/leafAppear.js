

const leafSlide = () => {
  const leaf = document.querySelector(".leaf");
  if(leaf){
  const tl = new  TimelineMax();
  tl.fromTo(
    leaf,
    1,
    {height: "0%"},
    {height: "100%", ease: Power2.easeInOut}
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
