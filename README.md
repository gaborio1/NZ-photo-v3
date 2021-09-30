SOURCES OF CODE I USED:

HOME PAGE PARALLAX: https://www.youtube.com/watch?v=Nt70Ld0dJCM&t=192s&ab_channel=DevEdDevEdVerified BY DEV ED
MODAL GALLERY: https://www.w3schools.com/howto/howto_js_lightbox.asp BY w3schools
BEFORE/AFTER SLIDER: https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s BY DEV ED

===== TODOS: =====

!!! prevent mobile sixe scroll from triggering onresize !!!
!!! only reload homepage on resize !!!
check and adjust z-indexes properly
✅  animated search button/field
✅  portrait style modal has a fade in animation while landscape style has not!
✅  delete createdivs() from script.js as this is now done with portfolio.js
✅  ??? navbar/footer-content/logic.js ??? (content is done with: document.write)
✅  add medium size footer to all pages
parallax layers act funny when resizing browser window
title div moves away from position when resizing
✅  category img divs don't fit img height => messing with :hover
✅  "photography" animation not smooth enough, try without making container flexbox
✅  footer not visible when placed outside of .main-content div (temp fix: placed inside main content)
✅  get rid of products-text-container in products
✅  navbar.js does not include the navbar opacity scroll TIMELINE from parallax.js
✅  navbar opacity onscroll is only active on home page, trigger el: .image-container

modal:
    ✅  re-position counter/close relative to image/container
    ✅  move prev/next to modal-img-container 


==================== ALL SIZES ====================

homepage:
    use text-align: baseline for .title-div-content to align enzee with photography
    ✅  add common footer css to homeapage

modal:
    stop resizing from closing modal(reload)

before/after:
    ✅  navbar dropdown button not showing active status (border bottom)

footer:



==================== MEDIUM SIZE ====================

changes
    homepage:
        Enzee/photography smaller letter-spacing
        category images larger width (overall size)
        mosaic div smaller height
        footer-top-img smaller height, justify-content: space between
        footer-top-img-cover justify-content: space around
        footer-content--full-width smaller margin top to fit clear div in
        footer-bottom smaller height

    navbar:
        adjust search-bar content as magnifier, input field and close button stack on top each other when active at 1235px width

    about:
        profile picture shrinks too fast

    contact:
        profile picture shrinks too fast, hide image???

    modal pages:
        modal gallery layout
        modal close button slides underneath modal image - reposition/x-index ???


    footer:
        h2.brand-color breaks into new line at 853px width

==================== SMALL SIZE ====================

all pages: 
    ✅  include iPhoneX (landscape) on all pages

homepage:
    !!! prevent scroll from triggering resize=>reload !!!
    orientation change refresh will close collapse expanded navbar 
    title div shifts y-position on orientation change (have to reload)
    design new layout for main content
    design smaller title divs
    ✅  disable hover-zoom
    ✅  disable hover-opacity
    disable blur effect on body when search-bar is active
    ✅  disable info-div animation
    re-configure scroll animation
    image-container div can now fit image height
    design small footer

other pages:
    ✅ make div/main content smaller/responsive as it is messing with sticky navbar

about:
    ✅  hide before/after gallery 
    ✅  make profile pic smaller 1:1 

modal:
    modal portrait gallery overflows container in landscape
    modal landscape gallery overflows container in landscape
    ✅  align last modal image to center in modal-portrait
    ✅  re-position counter/close relative to image/container
    ✅  move prev/next to modal-img-container 

products:
    ✅ add before/after gallery to products links

navbar:
    re-design layout for orientation: landscape
    ✅  ADD .preload TO .header and .backdrop to prevent animation on load
    animate navbar collapse when clicking on current page link
    look into navbar-logic.js:256 (ADD LISTENER TO ALL PAGE-LINKS AND COLLAPSE NAVBAR WHEN CLICKED) is this necessary ???
    include search-bar ???
    ✅  highlight and make dropdown content smaller
    ✅  align all links to center
    ✅  dynamically display up/down arrows with dropdown button
    ✅  keep active dropdown button text color when clicked
    blur page when navbar is expanded and transparent ???
    ✅  reset/collapse dropdown content when navbar is expanded
    ✅  reset arrows (show default down arrow only) when navbar is expanded
    ✅  make navbar transparent when page loads(navbar-logic.js)
    ✅  prevent keyframe animation from firing on page load
    hamburger/X toggle when expanding
    ✅k eep hamburger/X in top right corner when expanding navbar
    ✅  collapse navbar if actual page is selected from menu
    ✅  add evt listener to all nav-links (page-link.) and collapse navbar when one is clicked
    ✅ toggle sub-menu visibility with dropdown links (portfolio, products)
    ✅  collapse/expand navbar with evtlistener on hamburger/X
    ✅  fade-out logo when navbar expands ??? OR keep it as it is ???
    ✅  make div/main content smaller/responsive as it is messing with sticky navbar
    refactor navbar-logic.js
    ✅  add navbar-small.css

footer:
    ✅  add footer-small.css
    add landscape to footer-small.css
    make footer 100vh
    try footer without background image ???
    add custom css variables to font-sizes
    design new layout
    add back to top button?
    smaller, white social media icons in footer bottom?
