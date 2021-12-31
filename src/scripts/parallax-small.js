// window.addEventListener("resize", getCurrentWidth);

// function getCurrentWidth() {
//   let currentWidth = window.innerWidth;
//   console.log(currentWidth);
// }

if (window.innerWidth <= 768) {
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
			{ background: "rgba(0, 0, 0, 0.95)" }
		)

	new ScrollMagic.Scene({
		triggerElement: ".image-container",
		duration: "50%",
		triggerHook: 0,
	})
		.setTween(timelineNav)
		.addTo(controller);


	// Enzee FADE IN
	gsap.from(
		".enzee__letter ", {
		opacity: 0,
		duration: 1,
		stagger: 0.1,
		// stagger: 0.2,
		ease: "power2"
	});

	// photography FADE IN
	gsap.from(
		".photography__letter", {
		delay: 0.5,
		color: "##fdcf63",
		textShadow: "1px 1px 5px #fdae81, -1px -1px 5px #fdae81",
		opacity: 0,
		duration: 2,
		// stagger: 0.1,
		// repeat: 1,
		// yoyo: true
	});


	// MOUNTAIN LAYERS
	// let timelineMountain = new TimelineMax()
	// 	.to(".mountain-crop-1", 10, { y: -600 })
	// 	.to(".mountain-crop-2", 10, { y: -400 }, "-=10")
	// 	.to(".mountain-crop-3", 10, { y: -250 }, "-=10")
	// 	.to(".mountain-crop-4", 10, { y: -75 }, "-=10")
	// 	.to(".mountain-crop-5", 10, { y: -20 }, "-=10")
	// 	.to(".mountain-full", 10, { y: 5 }, "-=10")

	// 	.to(".title-div", 10, { top: "-200px" }, "-=20")
	// 	.to(".main-content", 10, { top: "-20px" }, "-=20");
	// new ScrollMagic.Scene({
	// 	triggerElement: ".image-container",
	// 	duration: "300%",
	// 	triggerHook: 0,
	// })
	// 	.setTween(timelineMountain)
	// 	.addTo(controller);

	// ========== ANIMATING CATEGORIES ONE BY ONE WITHOUT TIMELINE ==========

	// ===== MODEL =====
	let modelImg = new TimelineMax()
		.from(
			"#model-img-container",
			{ y: "20vh", opacity: 0 },
		);
	new ScrollMagic.Scene({
		triggerElement: "#model-img-trigger",
		duration: "70%",
		triggerHook: 1,
	})
		// .setClassToggle("visible")
		.setTween(modelImg)
		.addTo(controller);

	let modelText = new TimelineMax()
		.from(
			"#model-text-container",
			{ y: "5vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#model-text-trigger",
		duration: "20%",
		// offset: -30,
		triggerHook: 1,
	})
		// .setClassToggle("visible")
		.setTween(modelText)
		.addTo(controller);


	// ===== STREET =====
	let streetText = new TimelineMax()
		.from(
			"#street-text-container",
			{ x: "-50vw", opacity: 0 }
		);
	new ScrollMagic.Scene({
		triggerElement: "#street-text-trigger",
		duration: "35%",
		offset: 0,
		triggerHook: 1,
	})
		.setTween(streetText)
		.addTo(controller);


	let streetImg = new TimelineMax()
		.from(
			"#street-img-container",
			{
				x: "50vw", y: "-10vh",
				opacity: 0
			});
	new ScrollMagic.Scene({
		triggerElement: "#street-img-trigger",
		duration: "80%",
		offset: -80,
		triggerHook: 1,
	})
		.setTween(streetImg)
		.addTo(controller);


	// ===== MOTION =====
	let motionImg = new TimelineMax()
		.from(
			"#motion-img-container",
			{ x: "-20vw", y: "-20vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#motion-img-trigger",
		duration: "70%",
		triggerHook: 1,
	})
		.setTween(motionImg)
		.addTo(controller);

	let motionText = new TimelineMax()
		.from("#motion-text-container",
			{ x: "50vw", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#motion-text-trigger",
		duration: "35%",
		triggerHook: 0.95,
	})
		.setTween(motionText)
		.addTo(controller);

	//  ===== MOSAIC DIVIDER CONTAINER =====
	let mosaicContainer = new TimelineMax()
		.fromTo(
			"#mosaic-container",
			1,
			{ y: "-10vh" },
			{ y: "-2vh", ease: "linear" })
		.fromTo(
			"#mosaic-container",
			{ opacity: 0 }, { opacity: 1 },
			"-=1");
	new ScrollMagic.Scene({
		triggerElement: "#mosaic-trigger",
		duration: "150%",
		triggerHook: 0.95,
	})
		.setTween(mosaicContainer)
		.addTo(controller);

	// ===== MOSAIC SLICES =====
	let mosaicSlices = new TimelineMax()
		.fromTo(
			".mosaic-slice-container-1",
			1,
			{ x: "5vw" },
			{ x: "-5vw", ease: "linear" },
			"-=1")
		.fromTo(
			".mosaic-slice-container-2",
			1,
			{ x: "3vw" }, { x: "-3vw", ease: "linear" },
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
		.setTween(mosaicSlices)
		.addTo(controller);

	// ===== PORTRAIT =====

	let portraitImg = new TimelineMax()
		.from(
			"#portrait-img-container",
			{ y: "20vh", opacity: 0 },
		);
	new ScrollMagic.Scene({
		triggerElement: "#portrait-img-trigger",
		duration: "70%",
		triggerHook: 1,
	})
		// .setClassToggle("visible")
		.setTween(portraitImg)
		.addTo(controller);

	let portraitText = new TimelineMax()
		.from(
			"#portrait-text-container",
			{ y: "5vh", opacity: 0 })
	new ScrollMagic.Scene({
		triggerElement: "#portrait-text-trigger",
		duration: "20%",
		// offset: -30,
		triggerHook: 1,
	})
		// .setClassToggle("visible")
		.setTween(portraitText)
		.addTo(controller);


	// ===== ABSTRACT =====
	let abstractText = new TimelineMax()
		.from(
			"#abstract-text-container",
			{ x: "-50vw", opacity: 0 }
		);
	new ScrollMagic.Scene({
		triggerElement: "#abstract-text-trigger",
		duration: "35%",
		offset: 0,
		triggerHook: 1,
	})
		.setTween(abstractText)
		.addTo(controller);


	let abstractImg = new TimelineMax()
		.from(
			"#abstract-img-container",
			{ x: "50vw", y: "-10vh", opacity: 0 }
		);
	new ScrollMagic.Scene({
		triggerElement: "#abstract-img-trigger",
		duration: "80%",
		offset: -80,
		triggerHook: 1,
	})
		.setTween(abstractImg)
		.addTo(controller);


	// ===== NATURE =====
	let natureImg = new TimelineMax()
		.from(
			"#nature-img-container",
			{ x: "-20vw", y: "-20vh", opacity: 0 }
		);
	new ScrollMagic.Scene({
		triggerElement: "#nature-img-trigger",
		duration: "70%",
		triggerHook: 1,
	})
		.setTween(natureImg)
		.addTo(controller);

	let natureText = new TimelineMax()
		.from(
			"#nature-text-container",
			{ x: "50vw", opacity: 0 }
		);
	new ScrollMagic.Scene({
		triggerElement: "#nature-text-trigger",
		duration: "35%",
		triggerHook: 0.95,
	})
		.setTween(natureText)
		.addTo(controller);

	// SCROLL SKEW EFFECT ON PORTFOLIO GALLERY	

	// NOT NEEDED:
	// gsap.registerPlugin(ScrollTrigger);

	var skewSetter = gsap.quickSetter(".hover-shadow", "skewY", "deg");
	var proxy = { skew: 0 }

	ScrollTrigger.create({
		onUpdate: self => {
			var skew = self.getVelocity() / -800;
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
