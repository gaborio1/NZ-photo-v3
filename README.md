SOURCES OF CODE I USED:

HOME PAGE PARALLAX: https://www.youtube.com/watch?v=Nt70Ld0dJCM&t=192s&ab_channel=DevEdDevEdVerified BY DEV ED
MODAL GALLERY: https://www.w3schools.com/howto/howto_js_lightbox.asp BY w3schools
BEFORE/AFTER SLIDER: https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s BY DEV ED

===== TODOS: =====

!!! prevent mobile sixe scroll from triggering onresize !!!
!!! only reload homepage on resize !!!
check and adjust z-indexes properly

title div moves away from position when resizing

✅  footer not visible when placed outside of .main-content div (temp fix: placed inside main content)


==================== ALL SIZES ====================

homepage:
    ✅  add search-blur class to page (all elements except navbar)
    ✅  collapse search dropdown content when clicking on page
            include footer !!!
            include parallax !!!

all other pages: 
    ✅  collapse search dropdown content when clicking on page
            include footer !!!
        

navbar:
    make common class for navlink and search dropdown content
    

modal:
    stop resizing from closing modal(reload)

before/after:
    

footer:

==================== LARGE SIZE ====================


==================== MEDIUM SIZE ====================

    

homepage:
    
navbar:
   
about:
    profile picture shrinks too fast

contact:
    profile picture shrinks too fast, hide image???

modal pages:


footer:
    h2.brand-color breaks into new line at 853px width

==================== SMALL SIZE ====================

all pages: 
    add custom mediaquery to iPhoneX 
        home
        aboout
        products
        before/after
        contact

    

homepage:
    orientation change refresh will collapse expanded navbar ONLY ON HOMEPAGE 
    title div shifts y-position on orientation change (have to reload)
    design smaller title divs

other pages:

about:

modal:
    
products:

navbar:
    !!! medium navbar in iPhonex landscape !!!

    refactor navbar.js / parallax.js (make navbar dark on light background)
    re-design layout for orientation: landscape
    ✅  ADD .preload TO .header and .backdrop to prevent animation on load
    !!! animate navbar collapse when clicking on current page link (only working on homepage) CAUSES RELOAD ON OTHER PAGES !!!
    look into navbar-logic.js:256 (ADD LISTENER TO ALL PAGE-LINKS AND COLLAPSE NAVBAR WHEN CLICKED) is this necessary ???
    include search-bar ???
    
    hamburger/X toggle when expanding ???
    

footer:
    try footer without background image ???
    add custom css variables to font-sizes
    add back to top button?
    smaller, white social media icons in footer bottom?


==================== DEVICES ====================

iPad:
    portrait:
        navbar is transparent
        about page layout
        modal gallery layout
            portrait
            landscape
        services
        contact - remove image???
    landscape:
        about page layout
        modal gallery thumbnail container height
            landscape


iPad Pro:
    portrait:
        about page
        modal gallery layout
            portrait
            landscape
    landscape:
        about page
        
