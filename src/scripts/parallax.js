// PARALLAX
// !!!!! HAS TO BE UP TOP !!!!!
// IF Y VALUE NOT MODIFIED WE CAN USE ELEMENT AS TRIGGER

if (window.innerWidth > 768) {
	console.log("parallax js");

	const controller = new ScrollMagic.Controller();

	// CONTROL NAVBAR OPACITY WITH SCROLL
	const timelineNav = new TimelineMax()
		// REVEAL NAVBAR ON SCROLL display: none -> flex
		// .to("header", 1, { display: "flex" })
		// .fromTo("header", 1, { opacity: 0 }, { opacity: 1 }, "-=1")
		.fromTo(
			"header",
			1,
			{ background: "rgba(0, 0, 0, 0.85)" },
			{ background: "rgba(0, 0, 0, 0.95)" }
		);
	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		duration: "250%",
		triggerHook: 0,
	})
		.setTween(timelineNav)
		.addTo(controller);


	// ===== WHEN PAGE LOADS: =====

	// NAVBAR SLIDES DOWN 
	gsap.from(
		"header",
		{ duration: 1.25, y: -45, opacity: 0.5, ease: "power4" }
		);

	// LOGO, NAV-LINKS AND MAGNIFIER FADE IN SEQUENCE
	gsap.from(
		".navbar-fadein",
		{ duration: 0.2, opacity: 0, delay: 0.5, stagger: 0.1, ease: "linear" }
		);

	// MOUNTAIN FADE IN	
	gsap.from(".mountain-parallax", {
		duration: 1,
		// FLICKERING EDGE WITH SCALE
		// scale: 1.1,
		filter: "blur(10px)",
		// NOT WORKING
		// filter: "brightness(100%)",
		opacity: 0.7
		// ease: "power2"
	});

	// MAIN CONTENT FADE IN
	gsap.from(".main-content", {
		duration: 1,

		// !!! THESE TO WILL BREAK MODAL IN PORTFOLIO !!!
		// transform: "scale(0.8)",
		// scale: 0.9,

		filter: "grayscale(50%)",
		opacity: 0.1,
		ease: "power1"
	});

	gsap.from(
		".enzee__letter ", {
			// x: -300,
			opacity: 0,
			duration: 0.5,
			// stagger: -0.2,
			// stagger: 0.2,
			ease: "power2"
	});

	gsap.from(
		".photography__letter", {
			delay: 0.5,
			color: "##fdcf63",
			textShadow: "1px 1px 5px #fdae81, -1px -1px 5px #fdae81",
			// x: -300,
			opacity: 0,
			duration: 0.75,
			// stagger: -0.2,
			stagger: 0.1,
			// repeat: 1,
			// yoyo: true
	});
	
	



	// NOT WORKING TOGETHER WITH from
	// gsap.fromTo(".mountain-parallax", { filter: "brightness(0%)" }, { duration: 3, filter: "brightness(100%)" });


	// ========== MOVING MOUNTAIN LAYERS AT DIFFERENT SPEEDS ==========


	// ANIMATE ON PAGE LOAD

	// gsap.to("#mountain-crop-1", 5, { y: -1000 })
	// gsap.to("#mountain-crop-2", 5, { y: -600 })
	// gsap.to("#mountain-crop-3", 5, { y: -250 })
	// gsap.to("#mountain-crop-4", 5, { y: -115 })
	// gsap.to("#mountain-crop-5", 5, { y: -30 })
	// gsap.to("#mountain-crop-6", 5, { y: 20 })
	// gsap.to("#mountain-full", 5, { y: 100 });

	// gsap.to("#title-div", 5, { top: "-130%" })
	// gsap.to(".main-content", 5, { top: "-5%" });

	const timelineMountain = new TimelineMax()

		// SLIDE
		// .to("#mountain-crop-1", 1, { y: "-90vh" })
		.to("#mountain-crop-1", 1, { y: "-270vh" })
		// .to("#mountain-crop-2", 1, { y: "-60vh" }, "-=1")
		.to("#mountain-crop-2", 1, { y: "-180vh" }, "-=1")
		// .to("#mountain-crop-3", 1, { y: "-25vh" }, "-=1")
		.to("#mountain-crop-3", 1, { y: "-75vh" }, "-=1")
		// .to("#mountain-crop-4", 1, { y: "-5vh" }, "-=1")
		.to("#mountain-crop-4", 1, { y: "-15vh" }, "-=1")
		// .to("#mountain-crop-5", 1, { y: "30vh" }, "-=1")
		.to("#mountain-crop-5", 1, { y: "90vh" }, "-=1")
		// .to("#mountain-crop-6", 1, { y: "40vh" }, "-=1")
		.to("#mountain-crop-6", 1, { y: "120vh" }, "-=1")
		// PINNED:
		// .to("#mountain-full", 1, { y: "60vh" }, "-=1")
		.to("#mountain-full", 1, { y: "180vh" }, "-=1")

		// ZOOM
		.to("#mountain-crop-1", 1, { scale: 1.5 }, "-=1")
		.to("#mountain-crop-2", 1, { scale: 1.2 }, "-=1")
		.to("#mountain-crop-3", 1, { scale: 1.1 }, "-=1")
		// .to("#mountain-crop-4", 1, { scale: 1.05 }, "-=1")

		// SLIDE
		// .to("#title-div", 1, { top: "-130%" }, "-=1")
		.to("#title-div", 1, { top: "-400%" }, "-=1")
		// .to(".main-content", 1, { top: "-5%" }, "-=1");
		.to(".main-content", 1, { top: "-140%" }, "-=1");

	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		duration: "800%",
		triggerHook: 0,
	})
		.setTween(timelineMountain)
		// .setPin(".image-container")
		// .setPin("#mountain-full")
		.addTo(controller);

	// timelineMountain.timeScale(0.5);
	// const tween = TimelineMax.to("#mountain-crop-1", 1, { y: "-90vh" });
	// tween.timeScale(3);



	const titleDivFadeOut = new TimelineMax()

		// Enzee
		.to(
			".title-div__enzee-container",
			1,
			{ x: -100, filter: "blur(0px)", opacity: 0 },
		)
		// photography
		.to(".photography__letter",
			1,
			{ x: 200, y: 0, opacity: 0, delay: 0, stagger: 0.0 },
			"-=1")
		// CLEAR DIV
		.to(
			"#title-div",
			7,
			{ y: 0, scale: 1, filter: "blur(10px)", opacity: 0, ease: "easein" },
			"-=1");
	new ScrollMagic.Scene({
		triggerElement: "#title-div",
		duration: "100%",
		triggerHook: 0.1
	})
		.setTween(titleDivFadeOut)
		.addTo(controller);




	//==========================================
	// MASTER VERSION
	//==========================================

	// MOUNTAIN LAYERS:

	// let timelineMountain = new TimelineMax()


	// // .to("#mountain-crop-1", 3, { y: -800 }, "-=30")
	// .to("#mountain-crop-1", 1, { y: -1000 })
	// // .to("#mountain-crop-2", 3, { y: -500 }, "-=30")
	// .to("#mountain-crop-2", 1, { y: -600 }, "-=1")
	// // .to("#mountain-crop-3", 3, { y: -250 }, "-=30")
	// .to("#mountain-crop-3", 1, { y: -250 }, "-=1")
	// // .to("#mountain-crop-4", 3, { y: -115 }, "-=30")
	// .to("#mountain-crop-4", 1, { y: -115 }, "-=1")
	// // .to("#mountain-crop-5", 3, { y: -30 }, "-=30")
	// .to("#mountain-crop-5", 1, { y: -30 }, "-=1")
	// // .to("#mountain-crop-6", 3, { y: -10 }, "-=30");
	// .to("#mountain-crop-6", 1, { y: 20 }, "-=1")



	// .to("#mountain-full", 3, { y: 100 }, "-=1");
	// new ScrollMagic.Scene({
	// triggerElement: ".image-container",
	// duration: "250%",
	// // duration: "100%",
	// triggerHook: 0,
	// })
	// .setTween(timelineMountain)
	// .addTo(controller);

	// // TITLE-DIV AND MAIN CONTENT:
	// let timelineContentAndTitle = new TimelineMax()
	// // .to("#title-div", 3, { top: "-120%" }, "-=30")
	// .to("#title-div", 4, { top: "-130%" }, "-=20")
	// // MAIN CONTENT SLIDES ON TOP
	// // .to(".main-content", 3, { top: "0%" }, "-=30");
	// .to(".main-content", 4, { top: "-5%" }, "-=20");
	// new ScrollMagic.Scene({
	// triggerElement: ".image-container",
	// // duration: "1000%",
	// duration: "500%",
	// triggerHook: 0,
	// })
	// .setTween(timelineContentAndTitle)
	// // .setPin(".image-container")
	// .addTo(controller);


	// // ========== ZOOMING IN ON MOUNTAIN LAYERS AT DIFFERENT SPEEDS ==========


	// let zoomSequence = new TimelineMax()
	// .to("#mountain-crop-1", 1, { scale: 2, opacity: 1, ease: Linear.easeNone }, "-=10")
	// .to("#mountain-crop-2", 2, { scale: 1.8, opacity: 1, ease: Linear.easeNone }, "-=10")
	// .to("#mountain-crop-3", 3, { scale: 1.3, opacity: 1, ease: Linear.easeNone }, "-=10")
	// .to("#mountain-crop-4", 3, { scale: 1.2, opacity: 1, ease: Linear.easeNone }, "-=10")
	// .to("#mountain-crop-5", 3, { scale: 1.1, opacity: 1, ease: Linear.easeNone }, "-=10");
	// new ScrollMagic.Scene({
	// triggerElement: ".image-container",
	// duration: "500%",
	// // duration: "100%",
	// triggerHook: 0,
	// })
	// .setTween(zoomSequence)
	// .addTo(controller);


	// let titleDivFadeOut = new TimelineMax()
	// // Enzee
	// .fromTo(
	// 	".title-div__enzee-container",
	// 	1,
	// 	{ x: 0, filter: "blur(0px)", opacity: 1 },
	// 	{ x: -100, filter: "blur(0px)", opacity: 0 },
	// )
	// // photography
	// .fromTo(".photography__letter",
	// 	1,
	// 	{ x: 0, y: 0, opacity: 1 },
	// 	{ x: 100, y: 0, opacity: 0, delay: 0, stagger: 0 },
	// 	"-=1")
	// // CLEAR DIV
	// .fromTo(
	// 	"#title-div",
	// 	7,
	// 	{ y: 0, scale: 1, filter: "blur(0px)", opacity: 1 },
	// 	{ y: 0, scale: 1, filter: "blur(10px)", opacity: 0, ease: "easein" },
	// 	"-=1");
	// new ScrollMagic.Scene({
	// triggerElement: "#title-div",
	// duration: "100%",
	// triggerHook: 0.1
	// })
	// .setTween(titleDivFadeOut)
	// .addTo(controller);

	//===========================================
	//==========================================


	// ========== ANIMATING CATEGORIES ONE BY ONE WITHOUT TIMELINE ==========

	// ===== MODEL =====
	const timelineModel = new TimelineMax()
		.from("#model-img-container", 1, { y: "10vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#model-img-trigger",
		duration: "70%",
		triggerHook: 1
	})
		.setTween(timelineModel)
		.addTo(controller);

	const timelineModelText = new TimelineMax()
		.from("#model-text-container", 1, { y: "5vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#model-text-trigger",
		duration: "20%",
		triggerHook: 1
	})
		.setTween(timelineModelText)
		.addTo(controller);

	// ===== STREET =====
	const timelineStreetText = new TimelineMax()
		.from("#street-text-container", 1, { y: "5vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#street-text-trigger",
		duration: "20%",
		triggerHook: 1
	})
		.setTween(timelineStreetText)
		.addTo(controller);

	const timelineStreet = new TimelineMax()
		.from("#street-img-container", 1, { x: "5vw", y: "10vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#street-img-trigger",
		duration: "50%",
		triggerHook: 1
	})
		.setTween(timelineStreet)
		.addTo(controller);

	// ===== MOTION =====
	const timelineMotion = new TimelineMax()
		.from("#motion-img-container", 1, { x: "-5vw", y: "-20vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#motion-img-trigger",
		duration: "100%",
		triggerHook: 1
	})
		.setTween(timelineMotion)
		.addTo(controller);

	const timelineMotionText = new TimelineMax()
		.from("#motion-text-container", 1, { x: "5vw", y: "-10vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#motion-text-trigger",
		duration: "40%",
		triggerHook: 1
	})
		.setTween(timelineMotionText)
		.addTo(controller);



	// ===== MOSAIC DIVIDER CONTAINER =====
	const timelineMosaicContainer = new TimelineMax()
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
	const timelineMosaicSlices = new TimelineMax()
		.fromTo(".mosaic-slice-container-1", 1, { x: "5vw" }, { x: "-5vw", ease: "linear" })
		.fromTo(".mosaic-slice-container-2", 1, { x: "3vw" }, { x: "-3vw", ease: "linear" }, "-=1")
		.fromTo(".mosaic-slice-container-3", 1, { x: "1.5vw" }, { x: "-1.5vw", ease: "linear" }, "-=1");
	new ScrollMagic.Scene({
		triggerElement: ".mosaic-slice-container-1",
		duration: "150%",
		triggerHook: 0.9
	})
		.setTween(timelineMosaicSlices)
		.addTo(controller);


	// ===== PORTRAIT =====

	const timelinePortrait = new TimelineMax()
		.from("#portrait-img-container", 1, { y: "10vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#portrait-img-trigger",
		duration: "70%",
		triggerHook: 1
	})
		.setTween(timelinePortrait)
		.addTo(controller);

	const timelinePortraitText = new TimelineMax()
		.from("#portrait-text-container", 1, { y: "5vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#portrait-text-trigger",
		duration: "20%",
		triggerHook: 1
	})
		.setTween(timelinePortraitText)
		.addTo(controller);

	// ===== ABSTRACT =====

	const timelineAbstractText = new TimelineMax()
		.from("#abstract-text-container", 1, { y: "5vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#abstract-text-trigger",
		duration: "20%",
		triggerHook: 1
	})
		.setTween(timelineAbstractText)
		.addTo(controller);

	const timelineAbstract = new TimelineMax()
		.from("#abstract-img-container", 1, { x: "5vw", y: "10vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#abstract-img-trigger",
		duration: "50%",
		triggerHook: 1
	})
		.setTween(timelineAbstract)
		.addTo(controller);


	// ===== NATURE =====

	const timelineNature = new TimelineMax()
		.from("#nature-img-container", 1, { x: "-5vw", y: "-20vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#nature-img-trigger",
		duration: "100%",
		triggerHook: 1
	})
		.setTween(timelineNature)
		.addTo(controller);

	const timelineNatureText = new TimelineMax()
		.from("#nature-text-container", 1, { x: "5vw", y: "-10vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#nature-text-trigger",
		duration: "40%",
		triggerHook: 1
	})
		.setTween(timelineNatureText)
		.addTo(controller);


	// ========== FOOTER PARALLAX: ==========

	let textAndIconsFooter = new TimelineMax()
		// SLOGAN AND CONTACT BUTTON FADEIN/SLIDE

		// SLOGAN SENTENCES/BUTTON IN SEQUENCE:

		.from(
			".footer-info-content",
			7,
			{ x: -300, y: -70, scale: 0.5, filter: "blur(10px)", opacity: 0, delay: 50, stagger: 10 })

		// SOCIAL MEDIA ICONS FADEIN/SLIDE (SEQUENCE: stagger)
		.from(
			".full-width-2",
			7,
			{ y: 45, scale: 1, filter: "blur(10px)", opacity: 0 })

		.from(".social-media-icon",
			5,
			{ x: 200, opacity: 0, delay: 1, stagger: 1 }, "-=8");
	new ScrollMagic.Scene({
		triggerElement: ".footer-info-container-1",
		// duration: "100%",
		duration: 470,
		triggerHook: 1,
	})

		.setTween(textAndIconsFooter)
		.addTo(controller);


	// ROCKS SLIDE:
	const rockSlideFooter = new TimelineMax()
		.from("#footer-crop-rock-left", 5, { x: -100, filter: "blur(2px)" }, 1)
		.from("#footer-crop-rock-right", 5, { x: 100, filter: "blur(2px)" }, 0.75)
	new ScrollMagic.Scene({
		triggerElement: ".footer-info-container-1",
		// duration: "100%",
		duration: 470,
		triggerHook: 1
	})
		.setTween(rockSlideFooter)
		.addTo(controller);


	//  CAMERA ZOOM IN:
	const zoomCameraFooter = new TimelineMax()
		.from("#footer-crop-rock-camera",
			1,
			{ scale: 1.2, filter: "blur(5px)" }
		);
	new ScrollMagic.Scene({
		triggerElement: ".footer-info-container-1",
		// duration: "100%",
		duration: 470,
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


	// SCROLL SKEW EFFECT ON PORTFOLIO GALLERY	

	// NOT NEEDED:
	// gsap.registerPlugin(ScrollTrigger);

	const skewSetter = gsap.quickSetter(".hover-shadow", "skewY", "deg");
	const proxy = { skew: 0 }

	ScrollTrigger.create({
		onUpdate: self => {
			const skew = self.getVelocity() / -800;
			// console.log(skew);
			if (Math.abs(skew) > Math.abs(proxy.skew)) {
				proxy.skew = skew;
				gsap.to(proxy, {
					skew: 0,
					duration: 1,
					ease: "power3",
					overwrite: true,
					onUpdate: () => skewSetter(proxy.skew)
				})
			}
		}
	});

}



