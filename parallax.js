// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to(".test", 3, { x: 300 }); 
timeline.to(".mountain-crop-1", 3.5, { y: -500 })
.to(".mountain-crop-2", 3.5, { y: -400 }, "-=3.5")
.to(".mountain-crop-3", 3.5, { y: -200 }, "-=3.5")
.to(".mountain-crop-4", 3.5, { y: -75 }, "-=3.5") 
.to(".mountain-crop-5", 3.5, { y: -20 }, "-=3.5")
.to(".mountain-full", 3.5, { y: 5 }, "-=3.5")

// .to(".title-div", 3.5, { y: -750 }, "-=3.5")
.to(".title-div", 5, { top: "-100%" }, "-=3.5")

.to(".main-content", 13.1, { top: "0%" }, "-=8.2")
// .to(".main-content", 5, { y: -500 }, "-=5");


.to(".model-container", 3.5, { x: 25 }, "-=10")
.to(".model-container", 3.5, { y: -100 }, "-=10")
// .fromTo(".model-container", { opacity: .5 }, { opacity: 1, duration: 3.5 });


.to(".street-container", 3.5, { x: -25 }, "-=8")
.to(".street-container", 3.5, { y: -100 }, "-=8")


// .to(".motion-container", 3.5, { x: -25 }, "-=8")
.to(".motion-container", 3.5, { y: -150 }, "-=2");


// .to(".mosaic-container", 3.5, { x: -25 }, "-=8")
// .to(".mosaic-container", 4, { y: -250 });
 

let scene = new ScrollMagic.Scene({
  triggerElement: ".image-container",
  // triggerElement: ".container",
  duration: "130%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin(".image-container")
  // .setPin(".container")
  .addTo(controller);






  timeline.to(".mosaic-container", 6, { y: -300 }, "+=1");

  let scene2 = new ScrollMagic.Scene2({
    triggerElement: ".motion-container",
    // triggerElement: ".portrait-category-container",
    duration: "100%",
    // triggerHook: 'onEnter',
    triggerHook: 1,
  })
    .setTween(timeline)
    .setPin(".motion-container")
    // .setPin(".container")
    .addTo(controller);