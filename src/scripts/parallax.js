// PARALLAX
// !!!!! HAS TO BE UP TOP !!!!!
// IF Y VALUE NOT MODIFIED WE CAN USE ELEMENT AS TRIGGER


if (window.innerWidth > 768) {
	console.log("parallax js");

	const controller = new ScrollMagic.Controller();

	// CONTROL NAVBAR OPACITY WITH SCROLL
	let timelineNav = new TimelineMax()
		// REVEAL NAVBAR ON SCROLL display: none -> flex
		// .to("header", 1, { display: "flex" })
		// .fromTo("header", 1, { opacity: 0 }, { opacity: 1 }, "-=1")
		.fromTo("header", 1, { background: "rgba(0, 0, 0, 0.85)" }, { background: "rgba(0, 0, 0, 0.95)" }, "-=0");
	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		duration: "250%",
		// duration: "100%",
		triggerHook: 0,
	})
		.setTween(timelineNav)
		.addTo(controller);

	// ========== MOVING MOUNTAIN LAYERS AT DIFFERENT SPEEDS ==========


	// 					CURRENT VERSION:

	// MOUNTAIN LAYERS:

	let timelineMountain = new TimelineMax()


		// .to("#mountain-crop-1", 3, { y: -800 }, "-=30")
		.to("#mountain-crop-1", 1, { y: -1000 })
		// .to("#mountain-crop-2", 3, { y: -500 }, "-=30")
		.to("#mountain-crop-2", 1, { y: -500 }, "-=1")
		// .to("#mountain-crop-3", 3, { y: -250 }, "-=30")
		.to("#mountain-crop-3", 1, { y: -250 }, "-=1")
		// .to("#mountain-crop-4", 3, { y: -115 }, "-=30")
		.to("#mountain-crop-4", 1, { y: -115 }, "-=1")
		// .to("#mountain-crop-5", 3, { y: -30 }, "-=30")
		.to("#mountain-crop-5", 1, { y: -30 }, "-=1")
		// .to("#mountain-crop-6", 3, { y: -10 }, "-=30");
		.to("#mountain-crop-6", 1, { y: -10 }, "-=0");



	// .to("#mountain-full", 3, { y: 100 }, "-=30");
	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		duration: "250%",
		// duration: "100%",
		triggerHook: 0,
	})
		.setTween(timelineMountain)
		.addTo(controller);

	// TITLE-DIV AND MAIN CONTENT:
	let timelineContentAndTitle = new TimelineMax()
		// .to("#title-div", 3, { top: "-120%" }, "-=30")
		.to("#title-div", 4, { top: "-130%" }, "-=20")
		// MAIN CONTENT SLIDES ON TOP
		// .to(".main-content", 3, { top: "0%" }, "-=30");
		.to(".main-content", 4, { top: "-5%" }, "-=20");
	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		// duration: "1000%",
		duration: "500%",
		triggerHook: 0,
	})
		.setTween(timelineContentAndTitle)
		// .setPin(".image-container")
		.addTo(controller);


	// 					PINNING IMAGE CONTAINER:

	// let timelineMountain = new TimelineMax()
	// 	.to("#mountain-crop-1", 3, { y: -1000 }, "-=30")
	// 	// .to("#mountain-crop-1", 3, { scale: 2, opacity: 0, ease: Linear.easeNone })
	// 	.to("#mountain-crop-2", 3, { y: -600 }, "-=30")
	// 	.to("#mountain-crop-3", 3, { y: -300 }, "-=30")
	// 	.to("#mountain-crop-4", 3, { y: -60 }, "-=30")
	// 	.to("#mountain-crop-5", 3, { y: 25 }, "-=30")
	// 	.to("#mountain-full", 3, { y: 100 }, "-=30")
	// 	.to("#title-div", 3, { top: "80%" }, "-=30")
	// 	// MAIN CONTENT SLIDES ON TOP
	// 	.to(".main-content", 3, { top: "100%" }, "-=30");
	// new ScrollMagic.Scene({
	// 	triggerElement: ".image-container",
	// 	duration: "3000%",
	// 	// duration: "100000px",
	// 	triggerHook: 0,
	// })
	// 	.setTween(timelineMountain)
	// 	// .setPin(".image-container")
	// 	// THIS IS BETTER:
	// 	.setPin(".parallax-layers-container")
	// 	.addTo(controller);


	// ========== ZOOMING IN ON MOUNTAIN LAYERS AT DIFFERENT SPEEDS ==========


	let zoomSequence = new TimelineMax()
		.to("#mountain-crop-1", 1, { scale: 2, opacity: 1, ease: Linear.easeNone }, "-=10")
		.to("#mountain-crop-2", 2, { scale: 1.8, opacity: 1, ease: Linear.easeNone }, "-=10")
		.to("#mountain-crop-3", 3, { scale: 1.3, opacity: 1, ease: Linear.easeNone }, "-=10")
		.to("#mountain-crop-4", 3, { scale: 1.2, opacity: 1, ease: Linear.easeNone }, "-=10")
		.to("#mountain-crop-5", 3, { scale: 1.1, opacity: 1, ease: Linear.easeNone }, "-=10");
	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		duration: "500%",
		// duration: "100%",
		triggerHook: 0,
	})
		.setTween(zoomSequence)
		.addTo(controller);


	let titleDivFadeOut = new TimelineMax()
		// NOT IN USE:
		// photography LETTERS FADEOUT (SEQUENCE: stagger)

		// .fromTo(
		// 	// ".photography__letter",
		// 	// ".title-div-content",
		// 	".enzee__letter",
		// 	7,
		// 	{ y: 0, filter: "blur(0px)", opacity: 1 },
		// 	{ y: 0, filter: "blur(0px)", opacity: 0 },
		// )

		// Enzee
		.fromTo(
			".title-div__enzee-container",
			1,
			{ x: 0, filter: "blur(0px)", opacity: 1 },
			{ x: -100, filter: "blur(0px)", opacity: 0 },
		)
		// photography
		.fromTo(".photography__letter",
			1,
			{ x: 0, y: 0, opacity: 1 },
			{ x: 100, y: 0, opacity: 0, delay: 0, stagger: 0 },
			"-=1")
		// CLEAR DIV
		.fromTo(
			"#title-div",
			7,
			{ y: 0, scale: 1, filter: "blur(0px)", opacity: 1 },
			{ y: 0, scale: 1, filter: "blur(10px)", opacity: 0, ease: "easein" },
			"-=1");
	new ScrollMagic.Scene({
		triggerElement: "#title-div",
		duration: "100%",
		triggerHook: 0.1
	})
		.setTween(titleDivFadeOut)
		.addTo(controller);


	// ========== ANIMATING CATEGORIES ONE BY ONE WITHOUT TIMELINE ==========

	// ===== MODEL =====
	let timelineModel = new TimelineMax()
		.fromTo("#model-img-container", 1, { y: "20vh" }, { y: "-2vh", ease: "linear" })
		.fromTo("#model-img-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#model-img-trigger",
		duration: "70%",
		triggerHook: 0.95
	})
		.setTween(timelineModel)
		.addTo(controller);

	let timelineModelText = new TimelineMax()
		.fromTo("#model-text-container", 0.3, { y: "2vh" }, { y: "-2vh", ease: "linear" })
		.fromTo("#model-text-container", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.3");
	new ScrollMagic.Scene({
		triggerElement: "#model-text-trigger",
		duration: "20%",
		offset: -30,
		triggerHook: 0.95
	})
		.setTween(timelineModelText)
		.addTo(controller);

	// ===== STREET =====
	let timelineStreetText = new TimelineMax()
		.fromTo("#street-text-container", 0.1, { y: "-12vh" }, { y: "0vh", ease: "linear" }, "-=0")
		.fromTo("#street-text-container", 0.3, { x: "0vw" }, { x: "0vw", ease: "linear" }, "-=0.3")
		.fromTo("#street-text-container", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.1");
	new ScrollMagic.Scene({
		triggerElement: "#street-text-trigger",
		duration: "70%",
		offset: 40,
		triggerHook: 0.95
	})
		.setTween(timelineStreetText)
		.addTo(controller);

	let timelineStreet = new TimelineMax()
		.fromTo("#street-img-container", 1, { y: "20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
		.fromTo("#street-img-container", 1, { x: "5vw" }, { x: "0vw", ease: "linear" }, "-=1")
		.fromTo("#street-img-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#street-img-trigger",
		duration: "50%",
		offset: -80,
		triggerHook: 0.95
	})
		.setTween(timelineStreet)
		.addTo(controller);

	// ===== MOTION =====
	let timelineMotion = new TimelineMax()
		.fromTo("#motion-img-container", 1, { y: "-20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
		.fromTo("#motion-img-container", 1, { x: "-5vw" }, { x: "0vw", ease: "linear" }, "-=1")
		.fromTo("#motion-img-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#motion-img-trigger",
		duration: "50%",
		triggerHook: 0.95
	})
		.setTween(timelineMotion)
		.addTo(controller);

	let timelineMotionText = new TimelineMax()
		.fromTo("#motion-text-container", 0.3, { y: "-10vh" }, { y: "-10vh", ease: "linear" })
		.fromTo("#motion-text-container", 0.3, { x: "5vw" }, { x: "0vw", ease: "linear" }, "-=0.3")
		.fromTo("#motion-text-container", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.3");
	new ScrollMagic.Scene({
		triggerElement: "#motion-text-trigger",
		duration: "40%",
		triggerHook: 0.95
	})
		.setTween(timelineMotionText)
		.addTo(controller);

	// ===== MOSAIC DIVIDER CONTAINER =====
	let timelineMosaicContainer = new TimelineMax()
		.fromTo("#mosaic-container", 1, { y: "-10vh" }, { y: "-2vh", ease: "linear" }, "-=1")
		.fromTo("#mosaic-container", 0.5, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#mosaic-trigger",
		duration: "150%",
		triggerHook: 0.95
	})
		.setTween(timelineMosaicContainer)
		.addTo(controller);

	//===== MOSAIC SLICES =====
	let timelineMosaicSlices = new TimelineMax()
		.fromTo(".mosaic-slice-container-1", 1, { x: "5vw" }, { x: "-5vw", ease: "linear" }, "-=1")
		.fromTo(".mosaic-slice-container-2", 1, { x: "3vw" }, { x: "-3vw", ease: "linear" }, "-=1")
		.fromTo(".mosaic-slice-container-3", 1, { x: "1.5vw" }, { x: "-1.5vw", ease: "linear" }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: ".mosaic-slice-container-1",
		duration: "150%",
		triggerHook: 0.95
	})
		.setTween(timelineMosaicSlices)
		.addTo(controller);

	// ===== PORTRAIT =====
	let timelinePortrait = new TimelineMax()
		.fromTo("#portrait-img-container", 1, { y: "20vh" }, { y: "-2vh", ease: "linear" })
		.fromTo("#portrait-img-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#portrait-img-trigger",
		duration: "70%",
		triggerHook: 0.95
	})
		.setTween(timelinePortrait)
		.addTo(controller);

	let timelinePortraitText = new TimelineMax()
		.fromTo("#portrait-text-container", 0.3, { y: "2vh" }, { y: "-2vh", ease: "linear" })
		.fromTo("#portrait-text-container", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.3");
	new ScrollMagic.Scene({
		triggerElement: "#portrait-text-trigger",
		duration: "20%",
		offset: -30,
		triggerHook: 0.95
	})
		.setTween(timelinePortraitText)
		.addTo(controller);

	// ===== ABSTRACT =====
	let timelineAbstractText = new TimelineMax()
		.fromTo("#abstract-text-container", 0.1, { y: "-10vh" }, { y: "-0vh", ease: "linear" }, "-=0")
		.fromTo("#street-text-container", 0.3, { x: "5vw" }, { x: "-0vw", ease: "linear" }, "-=0.3")
		.fromTo("#abstract-text-container", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.1");
	new ScrollMagic.Scene({
		triggerElement: "#abstract-text-trigger",
		duration: "70%",
		offset: 40,
		triggerHook: 0.95
	})
		.setTween(timelineAbstractText)
		.addTo(controller);

	let timelineAbstract = new TimelineMax()
		.fromTo("#abstract-img-container", 1, { y: "20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
		.fromTo("#abstract-img-container", 1, { x: "5vw" }, { x: "0vw", ease: "linear" }, "-=1")
		.fromTo("#abstract-img-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#abstract-img-trigger",
		duration: "50%",
		offset: -80,
		triggerHook: 0.95
	})
		.setTween(timelineAbstract)
		.addTo(controller);

	// ===== NATURE =====
	let timelineNature = new TimelineMax()
		.fromTo("#nature-img-container", 1, { y: "-20vh" }, { y: "-2vh", ease: "linear" }, "-=1")
		.fromTo("#nature-img-container", 1, { x: "-5vw" }, { x: "0vw", ease: "linear" }, "-=1")
		.fromTo("#nature-img-container", 1, { opacity: 0 }, { opacity: 1 }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: "#nature-img-trigger",
		duration: "50%",
		triggerHook: 0.95
	})
		.setTween(timelineNature)
		.addTo(controller);

	let timelineNatureText = new TimelineMax()
		.fromTo("#nature-text-container", 0.3, { y: "-10vh" }, { y: "-10vh", ease: "linear" })
		.fromTo("#nature-text-container", 0.3, { x: "5vw" }, { x: "0vw", ease: "linear" }, "-=0.3")
		.fromTo("#nature-text-container", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.3");
	new ScrollMagic.Scene({
		triggerElement: "#nature-text-trigger",
		duration: "40%",
		// offset: 300,
		triggerHook: 0.95
	})
		.setTween(timelineNatureText)
		.addTo(controller);


	// ========== FOOTER PARALLAX: ==========

	let textAndIconsFooter = new TimelineMax()
		// SLOGAN AND CONTACT BUTTON FADEIN/SLIDE

		// FOOTER INFO DIV WITH SLOGAN AND BUTTON TOGETHER:

		// .fromTo(
		// 	".footer-info-container-1",
		// 	7,
		// 	{ x: -300, y: -70, scale: 0.4, opacity: 0 },
		// 	{ x: 0, y: 0, scale: 1, opacity: 1, ease: "easein", delay: 4, stagger: 0.8 },
		// 	"-=0.5")

		// SLOGAN SENTENCES/BUTTON IN SEQUENCE:
		.fromTo(
			".footer-info-content",
			7,
			{ x: -300, y: -70, scale: 0.5, filter: "blur(10px)", opacity: 0 },
			{ x: 0, y: 0, scale: 1, filter: "blur(0px)", opacity: 1, ease: "easein", delay: 4, stagger: 10 },
			"-=0.5")

		// CLEAR DIV:
		// .fromTo(
		// 	".footer-info-container-2",
		// 	7,
		// 	{ x: -300, scale: 0.5, filter: "blur(10px)", opacity: 0 },
		// 	{ x: 0, scale: 1, filter: "blur(0px)", opacity: 1, ease: "easein", delay: 4, stagger: 10 },
		// 	"-=0")

		// SOCIAL MEDIA ICONS FADEIN/SLIDE (SEQUENCE: stagger)
		.fromTo(
			".full-width-2",
			7,
			{ y: 100, scale: 1, filter: "blur(10px)", opacity: 0 },
			{ y: 0, scale: 1, filter: "blur(0px)", opacity: 1, ease: "easein" },
			"-=0")

		.fromTo(".social-media-icon",
			5,
			{ x: 200, opacity: 0 },
			{ x: 0, opacity: 1, ease: "easein", delay: 4, stagger: 1 },
			"-=0.5");
	new ScrollMagic.Scene({
		triggerElement: ".footer-info-container-1",
		// duration: "100%",
		duration: 475,
		triggerHook: 1
		// offset: -150
	})
		.setTween(textAndIconsFooter)
		.addTo(controller);


	// ROCKS SLIDE:
	let rockSlideFooter = new TimelineMax()
		.fromTo("#footer-crop-rock-left", 5, { x: -100, filter: "blur(2px)" }, { x: 0, filter: "blur(0px)" }, "2")
		.fromTo("#footer-crop-rock-right", 5, { x: 200, filter: "blur(2px)" }, { x: 0, filter: "blur(0px)" }, "0.5")
	new ScrollMagic.Scene({
		triggerElement: ".footer-info-container-1",
		duration: "100%",
		triggerHook: 1
	})
		.setTween(rockSlideFooter)
		.addTo(controller);


	//  CAMERA ZOOM IN:
	let zoomCameraFooter = new TimelineMax()
		.fromTo("#footer-crop-rock-camera",
			1,
			{ scale: 1.3, filter: "blur(5px)" },
			{ scale: 1, filter: "blur(0px)" }
		);
	new ScrollMagic.Scene({
		triggerElement: ".footer-info-container-1",
		duration: "100%",
		triggerHook: 1
	})
		.setTween(zoomCameraFooter)
		.addTo(controller);

	// NOT IN USE AS ICONS SLIDE IN ONE BY ONE !!!
	// SOCIAL MEDIA ICON CONTAINER (ALL ICONS SLIDE WITH CONTAINER)

	// let timelineSocialMediaContainer = new TimelineMax()
	// 	.to(".social-media-icon-container", 10, { x: "-200" }, "-=10")
	// new ScrollMagic.Scene({
	// 	triggerElement: ".footer-content-2",
	// 	duration: "100%",
	// 	triggerHook: 0.5,
	// 	// offset: 10
	// })
	// 	.setTween(timelineSocialMediaContainer)
	// 	// .setPin(".image-container")
	// 	.addTo(controller);

}
