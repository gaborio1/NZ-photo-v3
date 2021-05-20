// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

const controller = new ScrollMagic.Controller();
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
    triggerElement: ".image-container",
//   HOW FAST SCENE HAPPENS (PERCENT OR PIXELS)
    duration: "300%",
//   duration: 500,
    triggerHook: 0,
})
.setTween(timeline)
// .setPin(".image-container")
.addTo(controller);



// PIN MOSAIC CONTAINER

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#mosaic-trigger",
  duration: 200,
  triggerHook: 0.1,
})
.setPin("#mosaic-container")
.addTo(controller);




const controller2 = new ScrollMagic.Controller();
let timeline3 = new TimelineMax()

// LANDING PAGE AND TITLE DIV PARALLAX

    .fromTo("#portrait-container", 10, { y: "10vh" }, { y: "-2vh" }, "-=10")
    .fromTo("#portrait-container", 5, { opacity: 0 }, { opacity: 1 }, "-=10 ")

    .fromTo("#abstract-container", 10, { y: "10vh" }, { y: "-1vh" } , "-=10")
    .fromTo("#abstract-container", 10, { x: "5vw" }, { x: "-1vw" } , "-=10")
    .fromTo("#abstract-container", 12, { opacity: 0 }, { opacity: 1 } , "-=10")

    .fromTo("#nature-container", 10, { x: "-50vw" }, { x: "-1vw" } , "-=3")
    .fromTo("#nature-container", 10, { y: "-20vh" }, { y: "0vh" } , "-=2");
    // .fromTo("#nature-container", 10, { opacity: 0 }, { opacity: 1 } , "-=6");



let scene3 = new ScrollMagic.Scene({
    triggerElement: "#portrait-trigger",
//   HOW FAST SCENE HAPPENS (PERCENT OR PIXELS)
    duration: "120%",
//   duration: 500,
    offset: 300,
    triggerHook: 0.2,
})
.setTween(timeline3)
.addTo(controller);
