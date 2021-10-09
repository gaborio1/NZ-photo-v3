// window.addEventListener("resize", getCurrentWidth);

// function getCurrentWidth() {
//   let currentWidth = window.innerWidth;
//   console.log(currentWidth);
// }

if (window.innerWidth < 768) {
  	console.log("parallax small js");
  	// PARALLAX
  	// !!!!! HAS TO BE UP TOP !!!!!
  	// IF Y VALUE NOT MODIFIED WE CAN USE ELEMENT AS TRIGGER

  	// ========== LANDING PAGE AND TITLE DIV PARALLAX ==========

  	const controller = new ScrollMagic.Controller();

  	// CONTROL NAVBAR OPACITY WITH SCROLL
  	let timelineNav = new TimelineMax()
    // REVEAL NAVBAR ON SCROLL display: none -> flex
    // .to("header", 1, { display: "flex" })
    // .fromTo("header", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
    .fromTo(
     	"header",
      	1,
      	{ background: "rgba(0, 0, 0, 0.05)" },
      	{ background: "rgba(0, 0, 0, 0.95)" },
      	"-=0"
    );

	// NOT WORKING AS INTENDED

// 	.fromTo(
// 		".logo-container",
// 		1,
// 		{ opacity: "1" },
// 		{ opacity: "0.55" },
// 		"-=0"
//    );

  	new ScrollMagic.Scene({
    	triggerElement: ".image-container",
    	duration: "50%",
    	// offset: 20,
    	triggerHook: 0,
  	})
    .setTween(timelineNav)
    .addTo(controller);

  	// MOUNTAIN LAYERS
  	let timelineMountain = new TimelineMax()
    	.to(".mountain-crop-1", 10, { y: -600 })
    	.to(".mountain-crop-2", 10, { y: -400 }, "-=10")
    	.to(".mountain-crop-3", 10, { y: -250 }, "-=10")
    	.to(".mountain-crop-4", 10, { y: -75 }, "-=10")
    	.to(".mountain-crop-5", 10, { y: -20 }, "-=10")
    	.to(".mountain-full", 10, { y: 5 }, "-=10")

    	.to(
			".title-div",
			10,
			{ top: "-200px" },
			"-=20"
		)
    		// .to(".title-div", 10, { top: "0px" }, "0")
    		// MAIN CONTENT SLIDES ON TOP
    		// .to(".main-content", 12, { top: "-20px" }, "-=20");
    	.to(
			".main-content",
			10,
			{ top: "-20px" },
			"-=20"
		);
  	new ScrollMagic.Scene({
    	triggerElement: ".image-container",
    	duration: "300%",
    	triggerHook: 0,
  	})
    .setTween(timelineMountain)
    // TRY PINNING IMAGE CONTAINER
    // .setPin(".image-container")
    .addTo(controller);

	// ========== ANIMATING CATEGORIES ONE BY ONE WITHOUT TIMELINE ==========

  	// ===== MODEL =====
  	let timelineModel = new TimelineMax()
    	.fromTo(
			"#model-img-container",
			1,
			{ y: "20vh" },
			{ y: "0vh", ease: "linear" }
    	)
    	.fromTo(
			"#model-img-container",
			1,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
  	new ScrollMagic.Scene({
    	triggerElement: "#model-img-trigger",
    	duration: "60%",
    	triggerHook: 0.95,
  	})
    // .setClassToggle("visible")
    .setTween(timelineModel)
    .addTo(controller);

  	let timelineModelText = new TimelineMax()
		.fromTo(
			"#model-text-container",
			0.3,
			{ y: "5vh" },
			{ y: "0vh", ease: "linear" }
		)
		.fromTo(
			"#model-text-container",
			0.3,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=0.3"
		);
	new ScrollMagic.Scene({
		triggerElement: "#model-text-trigger",
		duration: "20%",
		offset: -30,
		triggerHook: 0.95,
	})
		// .setClassToggle("visible")
    .setTween(timelineModelText)
    .addTo(controller);

  	// ===== STREET =====
  	let timelineStreetText = new TimelineMax()
		.fromTo(
			"#street-text-container",
			1,
			{ x: "-50vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#street-text-container",
			2,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
	new ScrollMagic.Scene({
		triggerElement: "#street-text-trigger",
		duration: "35%",
		offset: 0,
		triggerHook: 0.95,
	})
		.setTween(timelineStreetText)
		.addTo(controller);

  	let timelineStreet = new TimelineMax()
    	.fromTo(
			"#street-img-container",
			1,
			{ y: "-10vh" },
			{ y: "0vh", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#street-img-container",
			1,
			{ x: "50vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#street-img-container",
			1,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
			
	new ScrollMagic.Scene({
		triggerElement: "#street-img-trigger",
		duration: "80%",
		offset: -80,
		triggerHook: 0.95,
	})
    .setTween(timelineStreet)
    .addTo(controller);

  	// ===== MOTION =====
  	let timelineMotion = new TimelineMax()
		.fromTo(
			"#motion-img-container",
			1,
			{ y: "-20vh" },
			{ y: "0vh", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#motion-img-container",
			1,
			{ x: "-20vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#motion-img-container",
			1,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);

  	new ScrollMagic.Scene({
		triggerElement: "#motion-img-trigger",
		duration: "70%",
		triggerHook: 0.95,
  	})
    .setTween(timelineMotion)
    .addTo(controller);

  	let timelineMotionText = new TimelineMax()
		.fromTo(
			"#motion-text-container",
			0.3,
			{ x: "50vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
		"#motion-text-container",
			0.3,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
	new ScrollMagic.Scene({
		triggerElement: "#motion-text-trigger",
		duration: "10%",
		triggerHook: 0.95,
	})
	.setTween(timelineMotionText)
	.addTo(controller);

  	//  ===== MOSAIC DIVIDER CONTAINER =====
  	let timelineMosaicContainer = new TimelineMax()
		.fromTo(
			"#mosaic-container",
			1,
			{ y: "-10vh" },
			{ y: "-2vh", ease: "linear" },
			"-=1"
		)
		// .fromTo("#mosaic-container", 1, { x: "5vw" }, { x: "-5vw", ease: "linear" }, "-=1")
		.fromTo(
			"#mosaic-container",
			0.5,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1");
  	new ScrollMagic.Scene({
		triggerElement: "#mosaic-trigger",
		duration: "150%",
		triggerHook: 0.95,
  	})
	.setTween(timelineMosaicContainer)
	.addTo(controller);

  // ===== MOSAIC SLICES =====
  	let timelineMosaicSlices = new TimelineMax()
    	.fromTo(
			".mosaic-slice-container-1",
			1,
			{ x: "5vw" },
			{ x: "-5vw", ease: "linear" },
			"-=1"
    	)
		.fromTo(
			".mosaic-slice-container-2",
			1,
			{ x: "3vw" },
			{ x: "-3vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			".mosaic-slice-container-3",
			1,
			{ x: "1.5vw" },
			{ x: "-1.5vw", ease: "linear" },
			"-=1"
		);
  	new ScrollMagic.Scene({
   		triggerElement: ".mosaic-slice-container-1",
    	duration: "150%",
    	triggerHook: 0.95,
  	})
    .setTween(timelineMosaicSlices)
    .addTo(controller);

  // ===== PORTRAIT =====

let timelinePortrait = new TimelineMax()
    	.fromTo(
			"#portrait-img-container",
			1,
			{ y: "20vh" },
			{ y: "0vh", ease: "linear" }
    	)
    	.fromTo(
			"#portrait-img-container",
			1,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
  	new ScrollMagic.Scene({
    	triggerElement: "#portrait-img-trigger",
    	duration: "60%",
    	triggerHook: 0.95,
  	})
    .setTween(timelinePortrait)
    .addTo(controller);

  	let timelinePortraitText = new TimelineMax()
		.fromTo(
			"#portrait-text-container",
			0.3,
			{ y: "5vh" },
			{ y: "0vh", ease: "linear" }
		)
		.fromTo(
			"#portrait-text-container",
			0.3,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=0.3"
		);
	new ScrollMagic.Scene({
		triggerElement: "#portrait-text-trigger",
		duration: "20%",
		offset: -30,
		triggerHook: 0.95,
	})
    .setTween(timelinePortraitText)
    .addTo(controller);

	// ===== ABSTRACT =====
	let timelineAbstractText = new TimelineMax()
		.fromTo(
			"#abstract-text-container",
			1,
			{ x: "-50vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#abstract-text-container",
			2,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
	new ScrollMagic.Scene({
		triggerElement: "#abstract-text-trigger",
		duration: "35%",
		offset: 0,
		triggerHook: 0.95,
	})
		.setTween(timelineAbstractText)
		.addTo(controller);

  	let timelineAbstract = new TimelineMax()
    	.fromTo(
			"#abstract-img-container",
			1,
			{ y: "-10vh" },
			{ y: "0vh", ease: "linear" },
			"-=1"
		)

		.fromTo(
			"#abstract-img-container",
			1,
			{ x: "50vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#abstract-img-container",
			1,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1");
	new ScrollMagic.Scene({
		triggerElement: "#abstract-img-trigger",
		duration: "80%",
		offset: -80,
		triggerHook: 0.95,
	})
    .setTween(timelineAbstract)
    .addTo(controller);

  	// ===== NATURE =====

	let timelineNature = new TimelineMax()
		.fromTo(
			"#nature-img-container",
			1,
			{ y: "-20vh" },
			{ y: "0vh", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#nature-img-container",
			1,
			{ x: "-20vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
			"#nature-img-container",
			1,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
			);

  	new ScrollMagic.Scene({
		triggerElement: "#nature-img-trigger",
		duration: "70%",
		triggerHook: 0.95,
  	})
    .setTween(timelineNature)
    .addTo(controller);

  	let timelineNatureText = new TimelineMax()
		.fromTo(
			"#nature-text-container",
			0.3,
			{ x: "50vw" },
			{ x: "0vw", ease: "linear" },
			"-=1"
		)
		.fromTo(
		"#nature-text-container",
			0.3,
			{ opacity: 0 },
			{ opacity: 1 },
			"-=1"
		);
	new ScrollMagic.Scene({
		triggerElement: "#nature-text-trigger",
		duration: "10%",
		triggerHook: 0.95,
	})
	.setTween(timelineNatureText)
	.addTo(controller);
}
