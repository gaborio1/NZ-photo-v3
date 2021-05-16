// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// LANDING PAGE AND TITLE DIV PARALLAX
timeline
    .to(".mountain-crop-1", 3.5, { y: -500 })
    .to(".mountain-crop-2", 3.5, { y: -400 }, "-=3.5")
    .to(".mountain-crop-3", 3.5, { y: -200 }, "-=3.5")
    .to(".mountain-crop-4", 3.5, { y: -75 }, "-=3.5") 
    .to(".mountain-crop-5", 3.5, { y: -20 }, "-=3.5")
    .to(".mountain-full", 3.5, { y: 5 }, "-=3.5")

    .to(".title-div", 5.8, { top: "-100%" }, "-=3.5")
    // MAIN CONTENT SLIDES ON TOP
    .to(".main-content", 13.1, { top: "0%" }, "-=8.2");


// .to(".model-container", 3.5, { x: 25 }, "-=10")
// .to(".model-container", 3.5, { y: -100 }, "-=10")


// .to(".street-container", 3.5, { x: -25 }, "-=8")
// .to(".street-container", 3.5, { y: -100 }, "-=8")


// .to(".motion-container", 3.5, { y: -150 }, "-=2");


let scene = new ScrollMagic.Scene({
    triggerElement: ".image-container",
//   HOW FAST SCENE HAPPENS (PERCENT OR PIXELS)
    duration: "65%",
//   duration: 300,
    triggerHook: 0,
})
.setTween(timeline)
.setPin(".image-container")
.addTo(controller);



//   MODEL AND STREET 

timeline
// .to(".model-container", 3.5, { y: -100 }, "-=10");
// .fromTo(".model-container", { opacity: 0 }, { opacity: 1, duration: 3 });
.fromTo(".model-container", 5, { y: 200 }, { y: -50, duration: 5 } , "-=10")

.fromTo(".street-container", 5, { y: 200 }, { y: -50, duration: 5 } , "-=6");

// .fromTo(".motion-container", 5, { x: 600 }, { x: 0, duration: 5 }, "+=5");
// .to(".motion-container", 5, { y: -100 }, "-=5");
// .fromTo(".motion-container", 5, { y: 200 }, { y: -50, duration: 5 } , "+=4");

// let scene2 = new ScrollMagic.Scene2({
//     triggerElement: ".container",
//     duration: "50%",
//     triggerHook: 1,
// })

// .setTween(timeline)
 // .setPin(".motion-container")
// .addTo(controller);

// MOTION

// timeline
// // .fromTo(".motion-container", 5, { y: 200 }, { y: -50, duration: 5 } , "-=5");
// .fromTo(".motion-container", 5, { y: 100 }, { y: -150, duration: 5 } , "-=15");
// // .to(".motion-container", 5, { y: -200 });

// let scene3 = new ScrollMagic.Scene3({
//     triggerElement: ".container",
//     // duration: "50%",
//     // triggerHook: 0.5,
// })
// .setTween(timeline)
// // .setPin(".motion-container")
// .addTo(controller);