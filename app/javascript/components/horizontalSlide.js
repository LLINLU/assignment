const horizontalSlide = () => {
  if (screen.width >= 481) {
  const slides= document.querySelector(".slides");
  if(slides){
  var controller = new ScrollMagic.Controller();
  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 2,   {x: "-20%"})
  .to("#js-slideContainer", 1,   {x: "-40%"})
  .to("#js-slideContainer", 1,   {x: "-60%"})
  .to("#js-slideContainer", 1,   {x: "-75%"})


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  };
}
}
export { horizontalSlide }

