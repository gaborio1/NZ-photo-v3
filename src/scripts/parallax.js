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

    // gsap.from(".modal", 5, { duration: 10, x: 200 });

    // NAVBAR SLIDES DOWN
    /*
    gsap.from("header", {
        duration: 1.25,
        y: -45,
        opacity: 0.5,
        ease: "power4",
    });
    */
    // LOGO, NAV-LINKS AND MAGNIFIER FADE IN SEQUENCE
    /*
    gsap.from(".navbar-fadein", {
        duration: 0.2,
        opacity: 0,
        delay: 0.5,
        stagger: 0.1,
        ease: "linear",
    });
    */
    // MOUNTAIN FADE IN
    /*
    gsap.from(".mountain-parallax", {
        duration: 0.5,
        // FLICKERING EDGE WITH SCALE
        // scale: 1.1,
        filter: "blur(3px)",
        // NOT WORKING
        // filter: "brightness(100%)",
        opacity: 0.7,
        // ease: "power2"
    });
    */
    // MAIN CONTENT SLIDE/FADE IN ALL TXT PAGES
    const currentUrl = window.location.href;
    if (
        currentUrl.includes("about") ||
        currentUrl.includes("products") ||
        currentUrl.includes("contact")
    ) {
        gsap.from(".main-content", {
            duration: 0.75,
            // !!! THESE TO WILL BREAK MODAL IN PORTFOLIO !!!
            // transform: "scale(0.8)",
            // scale: 0.9,

            // y: "100%",
            x: "-100%",
            filter: "grayscale(50%)",
            opacity: 0,
            ease: "power4",
        });
        // NO SLIDE ON IMAGE PAGES
    } else {
        gsap.from(".main-content", {
            duration: 1,
            filter: "grayscale(50%)",
            opacity: 0,
            ease: "linear",
        });
    }

    // Enzee FADE IN
    // 🟨🟨🟨 ❗️❗️❗️ THIS WILL CAUSE ENZEE TO DISAPPEAR AFTER WINDOW RESIZE ❗️❗️❗️ 🟨🟨🟨

    // gsap.from(".enzee__letter ", {
    //     // x: -300,
    //     opacity: 0,
    //     duration: 0.5,
    //     // stagger: -0.2,
    //     stagger: 0.1,
    //     ease: "power2",
    // });

    // photography FADE IN
    gsap.from(".photography__letter", {
        delay: 0.5,
        color: "##fdcf63",
        textShadow: "1px 1px 5px #fdae81, -1px -1px 5px #fdae81",
        // x: -300,
        opacity: 0,
        duration: 0.75,
        // stagger: -0.2,
        stagger: 0.1,
        // repeat: 1,
        // yoyo: true,
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

    // /*
    const timelineMountain = new TimelineMax()

    // SLIDE
    // .to("#mountain-crop-1", 1, { y: "-90vh" })

    // .to("#mountain-crop-2", 1, { y: "-60vh" }, "-=1")

    // .to("#mountain-crop-3", 1, { y: "-25vh" }, "-=1")

    // .to("#mountain-crop-4", 1, { y: "-5vh" }, "-=1")

    // .to("#mountain-crop-5", 1, { y: "30vh" }, "-=1")

    // .to("#mountain-crop-6", 1, { y: "40vh" }, "-=1")

    // PINNED:
    // .to("#mountain-full", 1, { y: "60vh" }, "-=1")

    // ZOOM
    // .to("#mountain-crop-1", 1, { scale: 1.3 }, "-=1")
    // .to("#mountain-crop-2", 1, { scale: 1.2 }, "-=1")
    // .to("#mountain-crop-3", 1, { scale: 1.1 }, "-=1")
    // NOT IN USE
    // .to("#mountain-crop-4", 1, { scale: 1 }, "-=1")
    // .to("#mountain-crop-4", 1, { scale: 1.05 }, "-=1")

    // SLIDE
    // .to("#title-div", 1, { top: "-130%" }, "-=1")
    // .to(".main-content", 1, { top: "-5%" }, "-=1");

    // .to("#title-div", 1, { top: "-400%" }, "-=1")
    // .to(".main-content", 1, { top: "-140%" }, "-=1");

    new ScrollMagic.Scene({
        triggerElement: ".image-container",
        // duration: "800%",

        // !!! DURATION WILL AFFECT SMOOTHNESS !!!
        duration: "3000%",
        triggerHook: 0,
    })
        .setTween(timelineMountain)
        // .setPin(".image-container")
        // .setPin("#mountain-full")
        .addTo(controller);

    // timelineMountain.timeScale(0.5);
    // const tween = TimelineMax.to("#mountain-crop-1", 1, { y: "-90vh" });
    // tween.timeScale(3);
    // */

    const titleDivFadeOut = new TimelineMax()

        // Enzee
        .to(".title-div__enzee-container", 1, {
            // x: -100,
            filter: "blur(0px)",
            opacity: 0,
        })
        // photography
        .to(
            ".photography__letter",
            1,
            {
                // x: 200,
                y: 0, opacity: 0, delay: 0, stagger: 0.0
            },
            "-=1"
        )
        // CLEAR DIV
        .to(
            "#title-div",
            7,
            {
                y: 0,
                scale: 1,
                filter: "blur(10px)",
                opacity: 0,
                ease: "easein",
            },
            "-=1"
        );
    new ScrollMagic.Scene({
        triggerElement: "#title-div",
        duration: "100%",
        triggerHook: 0.1,
    })
        .setTween(titleDivFadeOut)
        .addTo(controller);

    // ========== ANIMATING CATEGORIES ONE BY ONE WITHOUT TIMELINE ==========

    // ===== MODEL =====
    const modelImg = new TimelineMax().from("#model-img-container", 1, {
        // y: "10vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#model-img-trigger",
        duration: "70%",
        triggerHook: 1,
    })
        .setTween(modelImg)
        .addTo(controller);

    const modelText = new TimelineMax().from("#model-text-container", 1, {
        // y: "5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#model-text-trigger",
        duration: "20%",
        triggerHook: 1,
    })
        .setTween(modelText)
        .addTo(controller);

    // ===== STREET =====
    const streetText = new TimelineMax().from("#street-text-container", 1, {
        // y: "5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#street-text-trigger",
        duration: "20%",
        triggerHook: 1,
    })
        .setTween(streetText)
        .addTo(controller);

    const streetImg = new TimelineMax().from("#street-img-container", 1, {
        // x: "5vw",
        // y: "10vh",
        // x: "2.5vw",
        // y: "5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#street-img-trigger",
        duration: "50%",
        triggerHook: 1,
    })
        .setTween(streetImg)
        .addTo(controller);

    // ===== MOTION =====
    const motionImg = new TimelineMax().from("#motion-img-container", 1, {
        // x: "-5vw",
        // y: "-20vh",
        // x: "-1vw",
        // y: "-4vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#motion-img-trigger",
        duration: "100%",
        triggerHook: 1,
    })
        .setTween(motionImg)
        .addTo(controller);

    const motionText = new TimelineMax().from("#motion-text-container", 1, {
        // x: "5vw",
        // y: "-10vh",
        // x: "2.5vw",
        // y: "-5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#motion-text-trigger",
        duration: "40%",
        triggerHook: 1,
    })
        .setTween(motionText)
        .addTo(controller);

    // ===== MOSAIC DIVIDER CONTAINER =====
    // /*
    const timelineMosaicContainer = new TimelineMax()
        // .fromTo(
        //     "#mosaic-container",
        //     1,
        //     { y: "-10vh" },
        //     { y: "-2vh", ease: "linear" },
        //     "-=1"
        // )
        .fromTo(
            "#mosaic-container",
            0.5,
            { opacity: 0.5 },
            { opacity: 1 },
            "-=1"
        );
    new ScrollMagic.Scene({
        triggerElement: "#mosaic-trigger",
        duration: "150%",
        triggerHook: 0.95,
    })
        .setTween(timelineMosaicContainer)
        .addTo(controller);
    // */
    //===== MOSAIC SLICES =====
    /*
    const timelineMosaicSlices = new TimelineMax()
        .fromTo(
            ".mosaic-slice-container-1",
            1,
            { x: "3vw" },
            { x: "-3vw", ease: "linear" }
        )
        .fromTo(
            ".mosaic-slice-container-2",
            1,
            { x: "2vw" },
            { x: "-2vw", ease: "linear" },
            "-=1"
        )
        .fromTo(
            ".mosaic-slice-container-3",
            1,
            { x: "0.5vw" },
            { x: "-0.5vw", ease: "linear" },
            "-=1"
        );
    new ScrollMagic.Scene({
        triggerElement: ".mosaic-slice-container-1",
        duration: "150%",
        triggerHook: 0.9,
    })
        .setTween(timelineMosaicSlices)
        .addTo(controller);
    */
    // ===== PORTRAIT =====

    const portraitImg = new TimelineMax().from("#portrait-img-container", 1, {
        // y: "10vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#portrait-img-trigger",
        duration: "70%",
        triggerHook: 1,
    })
        .setTween(portraitImg)
        .addTo(controller);

    const portraitText = new TimelineMax().from("#portrait-text-container", 1, {
        // y: "5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#portrait-text-trigger",
        duration: "20%",
        triggerHook: 1,
    })
        .setTween(portraitText)
        .addTo(controller);

    // ===== ABSTRACT =====

    const abstractText = new TimelineMax().from("#abstract-text-container", 1, {
        // y: "5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#abstract-text-trigger",
        duration: "20%",
        triggerHook: 1,
    })
        .setTween(abstractText)
        .addTo(controller);

    const abstractImg = new TimelineMax().from("#abstract-img-container", 1, {
        // x: "5vw",
        // y: "10vh",
        // x: "2.5vw",
        // y: "5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#abstract-img-trigger",
        duration: "50%",
        triggerHook: 1,
    })
        .setTween(abstractImg)
        .addTo(controller);

    // ===== NATURE =====

    const natureImg = new TimelineMax().from("#nature-img-container", 1, {
        // x: "-5vw",
        // y: "-20vh",
        // x: "-1vw",
        // y: "-4vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#nature-img-trigger",
        duration: "100%",
        triggerHook: 1,
    })
        .setTween(natureImg)
        .addTo(controller);

    const natureText = new TimelineMax().from("#nature-text-container", 1, {
        // x: "5vw",
        // y: "-10vh",
        // x: "2.5vw",
        // y: "-5vh",
        opacity: 0,
    });
    new ScrollMagic.Scene({
        triggerElement: "#nature-text-trigger",
        duration: "40%",
        triggerHook: 1,
    })
        .setTween(natureText)
        .addTo(controller);

    // ========== FOOTER PARALLAX: ==========

    let textAndButtonFooter = new TimelineMax()
        // SLOGAN AND CONTACT BUTTON FADEIN/SLIDE

        // SLOGAN SENTENCES/BUTTON IN SEQUENCE:

        .from(".footer-info-content", 1, {
            // SLIDE IN FROM LEFT
            // x: -300,
            // y: -50,
            // MAGNIFYING EFFECT
            // scale: 0.5,
            scale: 1,
            filter: "blur(5px)",
            opacity: 0,
            stagger: 0.5,
        });

    new ScrollMagic.Scene({
        triggerElement: ".footer-info-container-1",
        // duration: "100%",
        duration: 300,
        triggerHook: 1,
    })

        .setTween(textAndButtonFooter)
        .addTo(controller);

    let socialMediaFooter = new TimelineMax()

        // SOCIAL MEDIA ICONS FADEIN/SLIDE (SEQUENCE: stagger)
        .from(".full-width-2", 7, {
            // duration: 1,
            // y: -20,
            scale: 1,
            filter: "blur(10px)",
            opacity: 0,
        })

        .from(
            ".social-media-icon",
            5,
            {
                // x: 200,
                opacity: 0,
                delay: 1,
                // stagger: 1,
            },
            "-=8"
        );
    new ScrollMagic.Scene({
        triggerElement: ".full-width-2",
        // duration: "100%",
        duration: 200,
        triggerHook: 1,
    })

        .setTween(socialMediaFooter)
        .addTo(controller);

    // ROCKS SLIDE:
    /*
    const rockSlideFooter = new TimelineMax()
        .from("#footer-crop-rock-left", 5, { x: -100, filter: "blur(2px)" }, 1)
        .from(
            "#footer-crop-rock-right",
            5,
            { x: 100, filter: "blur(2px)" },
            0.75
        );
    new ScrollMagic.Scene({
        triggerElement: ".footer-info-container-1",
        // duration: "100%",
        duration: 470,
        triggerHook: 1,
    })
        .setTween(rockSlideFooter)
        .addTo(controller);
    */
    //  CAMERA ZOOM IN:
    /*
    const zoomCameraFooter = new TimelineMax().from(
        "#footer-crop-rock-camera",
        1,
        { scale: 1.2, filter: "blur(5px)" }
    );
    new ScrollMagic.Scene({
        triggerElement: ".footer-info-container-1",
        // duration: "100%",
        duration: 470,
        triggerHook: 1,
    })
        .setTween(zoomCameraFooter)
        .addTo(controller);
        */
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

    /*
    // SCROLL SKEW EFFECT ON PORTFOLIO GALLERY
    const skewSetter = gsap.quickSetter(".hover-shadow", "skewY", "deg");
    const proxy = { skew: 0 };

    ScrollTrigger.create({
        onUpdate: (self) => {
            const skew = self.getVelocity() / -2000;
            // console.log(skew);
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.5,
                    ease: "power3",
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew),
                });
            }
        },
    });
    */
    // NOT WORKING:

    // const sliders = document.querySelectorAll(".slider");

    // PAGE TITLES (before/after)
    /*
    gsap.fromTo(
        ".slider-title",
        10,
        { x: "-500px" },
        { x: "0px", duration: 10, delay: 3 }
    );
    */
}
