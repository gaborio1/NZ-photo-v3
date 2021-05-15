// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to(".test", 3, { x: 300 }); 
timeline.to(".mountain-crop-1", 5, { y: -500 })
.to(".mountain-crop-2", 5, { y: -400 }, "-=5")
.to(".mountain-crop-3", 5, { y: -200 }, "-=5")
.to(".mountain-crop-4", 5, { y: -75 }, "-=5") 
.to(".mountain-crop-5", 5, { y: -20 }, "-=5")
.to(".mountain-full", 5, { y: 10 }, "-=5")
.to(".title-div", 5, { y: -750 }, "-=5")
.to(".main-content", 15, { top: "0%" }, "-=9");
// .to(".main-content", 5, { y: -500 }, "-=5");

 
let scene = new ScrollMagic.Scene({
  triggerElement: ".image-container",
  duration: "150%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin(".image-container")
  .addTo(controller);