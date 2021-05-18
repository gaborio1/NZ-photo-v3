// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// LANDING PAGE AND TITLE DIV PARALLAX
timeline
    .to(".mountain-crop-1", 10, { y: -600 })
    .to(".mountain-crop-2", 10, { y: -400 }, "-=10")
    .to(".mountain-crop-3", 10, { y: -250 }, "-=10")
    .to(".mountain-crop-4", 10, { y: -75 }, "-=10") 
    .to(".mountain-crop-5", 10, { y: -20 }, "-=10")
    .to(".mountain-full", 10, { y: 5 }, "-=10")

    .to(".title-div", 10, { top: "-120%" }, "-=10")
    // MAIN CONTENT SLIDES ON TOP
    .to(".main-content", 10, { top: "0%" }, "-=10");


let scene = new ScrollMagic.Scene({
    triggerElement: ".image-container",
//   HOW FAST SCENE HAPPENS (PERCENT OR PIXELS)
    duration: "75%",
  // duration: 100,
    triggerHook: 0,
})
.setTween(timeline)
// .setPin(".image-container")
.addTo(controller);




//   MODEL AND STREET 

// timeline
// .to(".model-container", 3.5, { y: -100 }, "-=10");
// .fromTo(".model-container", { opacity: 0 }, { opacity: 1, duration: 3 });
// .fromTo(".model-container", 5, { y: 200 }, { y: -50, duration: 5 } , "-=10");

// .fromTo(".street-container", 5, { y: 200 }, { y: -50, duration: 1 } , "-=6")

// .fromTo(".motion-container", 5, { y: 200 }, { y: -50, duration: 3.5 }, "-=4");
// .fromTo(".motion-container", 5, { x: 600 }, { x: 0, duration: 5 }, "+=2");

// .to(".motion-container", 5, { y: -100 }, "-=5");
// .fromTo(".motion-container", 5, { y: 200 }, { y: -50, duration: 5 } , "+=4");

// fromTo(".motion-container", { x: 600 }, { x: 0, duration: 3.5 }, "+=6")

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  duration: 500,
  triggerHook: 0.1,
})
.setPin("#mosaic-container")
.addTo(controller);

