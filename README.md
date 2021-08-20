SOURCES OF CODE I USED:

HOME PAGE PARALLAX: https://www.youtube.com/watch?v=Nt70Ld0dJCM&t=192s&ab_channel=DevEdDevEdVerified BY DEV ED
MODAL GALLERY: https://www.w3schools.com/howto/howto_js_lightbox.asp BY w3schools
BEFORE/AFTER SLIDER: https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s BY DEV ED

===== TODOS: =====

✅ animated search button/field
✅ portrait style modal has a fade in animation while landscape style has not!
✅ delete createdivs() from script.js as this is now done with portfolio.js
✅ ??? navbar/footer-content/logic.js ??? (content is done with: document.write)

===== BUGS: =====

parallax layers act funny when resizing browser window
title div moves away from position when resizing
✅ category img divs don't fit img height => messing with :hover
✅ "photography" animation not smooth enough, try without making container flexbox
✅ footer not visible when placed outside of .main-content div (temp fix: placed inside main content)

===== PROBLEMS: =====

✅ navbar.js does not include the navbar opacity scroll TIMELINE from parallax.js
✅ navbar opacity onscroll is only active on home page, trigger el: .image-container

UPDATES:
navbar, footer:
index,about,contact.html
index,about,slider,contact.css
navbar-content.js, navbar.css (for lightbox 2:1 test)
footer.js, footer.css (for lightbox 2:1 test)

==================== MEDIUM SIZE CHANGES: ====================

homepage:
Enzee/photography smaller letter-spacing
category images larger width (overall size)
mosaic div smaller height
footer-top-img smaller height, justify-content: space between
footer-top-img-cover justify-content: space around
footer-content--full-width smaller margin top to fit clear div in
footer-bottom smaller height

==================== SMALL SIZE ====================

homepage:
design new layout for main content
design small footer

other pages:
make div/main content smaller/responsive as it is messing with sticky navbar

navbar:
✅ prevent keyframe animation from firing on page load
hamburger/X toggle when expanding
✅keep hamburger/X in top right corner when expanding navbar
collapse navbar if actual page is selected from menu
✅ add evt listener to all nav-links (page-link.) and collapse navbar when one is clicked
toggle sub-menu visibility with dropdown links (portfolio, products)
✅ collapse/expand navbar with evtlistener on hamburger/X
✅ fade-out logo when navbar expands ??? OR keep it as it is ???
make div/main content smaller/responsive as it is messing with sticky navbar
refactor navbar-logic.js
add navbar-small.css

footer:
✅ add footer-small.css
add custom css variables to font-sizes
design new layout
add back to top button?
smaller, white social media icons in footer bottom?
