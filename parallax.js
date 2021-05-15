// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to(".test", 3, { x: 300 }); 
timeline.to(".mountain-crop-1", 3, { y: -500 })
.to(".mountain-crop-2", 3, { y: -400 }, "-=3")
.to(".mountain-crop-3", 3, { y: -200 }, "-=3")
.to(".mountain-crop-4", 3, { y: -75 }, "-=3") 
.to(".mountain-crop-5", 3, { y: -20 }, "-=3")
.to(".mountain-full", 3, { y: 10 }, "-=3")
.to(".title-div", 3, { y: -750 }, "-=3.5")
// .to(".title-div", 5, { top: "-50%" }, "-=7")
.to(".main-content", 13, { top: "0%" }, "-=7");
// .to(".main-content", 5, { y: -500 }, "-=5");

 
let scene = new ScrollMagic.Scene({
  triggerElement: ".image-container",
  // triggerElement: ".container",
  duration: "150%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin(".image-container")
  // .setPin(".container")
  .addTo(controller);