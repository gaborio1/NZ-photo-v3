// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax()

// LANDING PAGE AND TITLE DIV PARALLAX

    .to(".mountain-crop-1", 10, { y: -600 })
    .to(".mountain-crop-2", 10, { y: -400 }, "-=10")
    .to(".mountain-crop-3", 10, { y: -250 }, "-=10")
    .to(".mountain-crop-4", 10, { y: -75 }, "-=10") 
    .to(".mountain-crop-5", 10, { y: -20 }, "-=10")
    .to(".mountain-full", 10, { y: 5 }, "-=10")

    .to(".title-div", 10, { top: "-120%" }, "-=10")
    // MAIN CONTENT SLIDES ON TOP
    .to(".main-content", 10, { top: "0%" }, "-=10")

    .fromTo("#model-container", 1, { y: "25vh" }, { y: "-0vh" } , "-=9")
    .fromTo("#model-container", 1, { opacity: 0 }, { opacity: 1 } , "-=9")

    .fromTo("#street-container", 1.5, { y: "5vh" }, { y: "-0vh" } , "-=8")
    .fromTo("#street-container", 2, { x: "5vw" }, { x: "-0vw" } , "-=8")
    .fromTo("#street-container", 1, { opacity: 0 }, { opacity: 1 } , "-=8")

// .fromTo("#motion-container", 1.5, { y: "-25vh" }, { y: "-0vh" } , "-=5")
    .fromTo("#motion-container", 1.5, { x: "-30vw" }, { x: "-0vw" } , "-=5.75")
    .fromTo("#motion-container", 1.5, { y: "-20vh" }, { y: "0vh" } , "-=5.75")
    .fromTo("#motion-container", 1, { opacity: 0 }, { opacity: 1 } , "-=5.75");
    // .to("#model-container", 4, { y: -300 }, "-=0");




let scene = new ScrollMagic.Scene({
    // triggerElement: ".image-container",
//   HOW FAST SCENE HAPPENS (PERCENT OR PIXELS)
    duration: "300%",
//   duration: 500,
    triggerHook: 1,
})
.setTween(timeline)
// .setPin(".image-container")
.addTo(controller);



// PIN MOSAIC CONTAINER

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#mosaic-trigger",
  duration: 500,
  triggerHook: 0.1,
})
.setPin("#mosaic-container")
.addTo(controller);



// SLIDE IN MODEL AND STREET

// timeline
// .fromTo("#model-container", 4, { y: 200 }, { y: -50 } , "-=10.5")
// .fromTo("#street-container", 10, { y: 200 }, { y: -850 } , "-=7")
// // .fromTo("#motion-container", 6, { y: 200 }, { y: -50, duration: 4 } , "+=9");
// .fromTo("#motion-container", 4, { y: 100 }, { y: -150 } , "-=1.7");

// let scene3 = new ScrollMagic.Scene({
//     triggerElement: "#model-trigger",
//     duration: 250,
//     // offset: -320,
//     triggerHook: 1
//   })
// //   .setPin("#model-img-container")
//     // .setTween(timelineTest)
//     .addTo(controller);


// SLIDE IN MOTION

    // timeline
    // .fromTo("#motion-container", 6, { y: 500 }, { y: -50, duration: 2 } , "+=1");
    
    // let scene4 = new ScrollMagic.Scene({
    //     triggerElement: "#motion-trigger",
    //     duration: 1000,
    //     offset: -720,
    //     triggerHook: 0.1,
    //   })
    // //   .setPin("#model-img-container")
    //     // .setTween(timelineTest)
    //     .addTo(controller);   

    // new ScrollMagic.Scene({
    //     triggerElement: "#motion-trigger",
    //     duration: 250,
    //     triggerHook: 0
    // })
    // // .fromTo("#motion-container", 6, { y: 500 }, { y: -50, duration: 4 } , "-=5")
	// 				.addTo(controller);

        // timeline
        // .fromTo("#motion-container", 6, { y: 100 }, { y: -150 } , "-=1.7");