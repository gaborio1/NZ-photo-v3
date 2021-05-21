// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!
// IF Y VALUE NOT MODIFIED WE CAN USE ELEMENT AS TRIGGER

// ========== LANDING PAGE AND TITLE DIV PARALLAX ==========

const controller = new ScrollMagic.Controller();
let timeline = new TimelineMax()

    .to(".mountain-crop-1", 10, { y: -600 })
    .to(".mountain-crop-2", 10, { y: -400 }, "-=10")
    .to(".mountain-crop-3", 10, { y: -250 }, "-=10")
    .to(".mountain-crop-4", 10, { y: -75 }, "-=10") 
    .to(".mountain-crop-5", 10, { y: -20 }, "-=10")
    .to(".mountain-full", 10, { y: 5 }, "-=10")

    .to(".title-div", 10, { top: "-120%" }, "-=10")
    // MAIN CONTENT SLIDES ON TOP
    .to(".main-content", 10, { top: "0%" }, "-=10");

// ========== FIRST 3 CATEGORIES ==========

    // .fromTo("#model-container", 1, { y: "25vh" }, { y: "-0vh" } , "-=9")
    // .fromTo("#model-container", 1, { opacity: 0 }, { opacity: 1 } , "-=9")

    // .fromTo("#street-container", 1.5, { y: "5vh" }, { y: "-0vh" } , "-=8")
    // .fromTo("#street-container", 2, { x: "5vw" }, { x: "-0vw" } , "-=8")
    // .fromTo("#street-container", 1, { opacity: 0 }, { opacity: 1 } , "-=8")

    // .fromTo("#motion-container", 1.5, { x: "-30vw" }, { x: "-0vw" } , "-=5.75")
    // .fromTo("#motion-container", 1.5, { y: "-20vh" }, { y: "0vh" } , "-=5.75")
    // .fromTo("#motion-container", 1, { opacity: 0 }, { opacity: 1 } , "-=5.75");

let scene = new ScrollMagic.Scene({
    triggerElement: ".image-container",
    duration: "300%",
    triggerHook: 0,
})
.setTween(timeline)
// .setPin(".image-container")
.addTo(controller);


// ========== PIN MOSAIC CONTAINER ==========

// let scene2 = new ScrollMagic.Scene({
//   triggerElement: "#mosaic-trigger",
//   duration: 200,
//   triggerHook: 0.1,
// })
// .setPin("#mosaic-container")
// .addTo(controller);




// ========== ANIMATING CATEGORIES ONE BY ONE WITHOUT TIMELINE ==========

let timelineModel = new TimelineMax()
    .fromTo("#model-container", 1, { y: "5vh" }, { y: "-2vh", ease: "linear"})
    // .fromTo("#model-container", { y: "20vh" }, { y: "-0vh", duration: 1, ease: "cubic-bezier(1, 1, 1, 0.1)"})
    .fromTo("#model-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");

new ScrollMagic.Scene({
    triggerElement: "#model-trigger",
    duration: "50%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
// .setClassToggle("visible") 
.setTween(timelineModel)
.addTo(controller);




let timelineStreet = new TimelineMax()

    .fromTo("#street-container", 1, { y: "20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
    .fromTo("#street-container", 1, { x: "5vw" }, { x: "-0vw", ease: "linear" }, "-=1")
    .fromTo("#street-container", 1, { opacity: 0 }, { opacity: 1 } , "-=1")

new ScrollMagic.Scene({
    triggerElement: "#street-trigger",
    duration: "50%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
.setTween(timelineStreet)
.addTo(controller);



let timelineMotion = new TimelineMax()

    .fromTo("#motion-container", 1, { y: "-20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
    .fromTo("#motion-container", 1, { x: "-5vw" }, { x: "-0vw", ease: "linear" }, "-=1")
    .fromTo("#motion-container", 1, { opacity: 0 }, { opacity: 1 } , "-=1")

new ScrollMagic.Scene({
    triggerElement: "#motion-trigger",
    duration: "50%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
.setTween(timelineMotion)
.addTo(controller);


let timelineMosaic = new TimelineMax()

    .fromTo("#mosaic-container", 1, { y: "-10vh" }, { y: "-2vh", ease: "linear" }, "-=1")
    .fromTo("#mosaic-container", 1, { x: "5vw" }, { x: "-5vw", ease: "linear" }, "-=1")
    .fromTo("#mosaic-container", 0.5, { opacity: 0 }, { opacity: 1 } , "-=1")

    // .fromTo("#mosaic-container", 1, { y: "-2vh" }, { y: "10vh", ease: "linear" })
    // .fromTo("#mosaic-container", 1, { x: "-0vw" }, { x: "-5vw", ease: "linear" }, "-=0");
    // .fromTo("#mosaic-container", 1, { opacity: 1 }, { opacity: 0 }, "-=1")

new ScrollMagic.Scene({
    triggerElement: "#mosaic-trigger",
    duration: "150%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
.setTween(timelineMosaic)
.addTo(controller);


let timelinePortrait = new TimelineMax()
    .fromTo("#portrait-container", 1, { y: "5vh" }, { y: "-2vh", ease: "linear"})
    // .fromTo("#model-container", { y: "20vh" }, { y: "-0vh", duration: 1, ease: "cubic-bezier(1, 1, 1, 0.1)"})
    .fromTo("#portrait-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");

new ScrollMagic.Scene({
    triggerElement: "#portrait-trigger",
    duration: "50%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
// .setClassToggle("visible") 
.setTween(timelinePortrait)
.addTo(controller);


let timelineAbstract = new TimelineMax()

    .fromTo("#abstract-container", 1, { y: "20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
    .fromTo("#abstract-container", 1, { x: "5vw" }, { x: "-0vw", ease: "linear" }, "-=1")
    .fromTo("#abstract-container", 1, { opacity: 0 }, { opacity: 1 } , "-=1")

new ScrollMagic.Scene({
    triggerElement: "#abstract-trigger",
    duration: "50%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
.setTween(timelineAbstract)
.addTo(controller);







let timelineNature = new TimelineMax()

    .fromTo("#nature-container", 1, { y: "-20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
    .fromTo("#nature-container", 1, { x: "-5vw" }, { x: "-0vw", ease: "linear" }, "-=1")
    .fromTo("#nature-container", 1, { opacity: 0 }, { opacity: 1 } , "-=1")

new ScrollMagic.Scene({
    triggerElement: "#nature-trigger",
    duration: "50%",
    // reverse: true,
    // offset: 50,					
    triggerHook: 0.95,
})
.setTween(timelineNature)
.addTo(controller);