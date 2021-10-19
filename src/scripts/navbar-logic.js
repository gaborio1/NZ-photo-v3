console.log("navbar-logic.js");
// ========== STICKY NAVBAR (W3SCHOOLS) ==========
//  https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
    makeNavbarSticky();
};

window.onresize = function() {
	// if (window.innerWidth > 767) {
		// location.reload();
	// }
}
// Get the navbar
const navbar = document.getElementById("header");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

const addClass = (elementsArr, classname) => {
    for (el of elementsArr) {
        el.classList.add(classname);
    }
}

const removeClass = (elementsArr, classname) => {
    for (el of elementsArr) {
        el.classList.remove(classname);
    }
}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const makeNavbarSticky = () => {
    if (window.pageYOffset >= sticky) {
        addClass([navbar], "sticky");
    } else {
        removeClass([navbar], "sticky");
    }
};

// ========== SEARCH BAR ==========

const defaultButton = document.getElementById("default-btn");
const submitButton = document.getElementById("submit-btn");
const closeButton = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");
const searchDropdownContent = document.getElementById("search-dropdown-content");
const searchDropdownLinks = searchDropdownContent.getElementsByTagName("a");
// imageContainer, mainContent AND footer (ALL ELEMENTS EXCEPT NAVBAR)
const searchBlurElements = document.getElementsByClassName("search-blur");


// SHOW/HIDE SEARCH BAR
const showSearchBar = () => {
    addClass([defaultButton], "hidden");
    removeClass([submitButton, searchInput, closeButton], "hidden");
    searchInput.style.width = "140px";
};

const hideSearchBar = () => {
    removeClass([defaultButton], "hidden");
    addClass([submitButton, searchInput, closeButton], "hidden");
    searchInput.style.width = "0px";
};

// FILTER THROUGH SEARCH-BAR DROPDOWN LINKS BASED ON USER INPUT
// (W3SCHOOLS) https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
const filterFunction = () => {
    const filter = searchInput.value.toUpperCase();
    for (let i = 0; i < searchDropdownLinks.length; i++) {
        txtValue =  searchDropdownLinks[i].textContent || searchDropdownLinks[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            searchDropdownLinks[i].style.display = "";
        } else {
            searchDropdownLinks[i].style.display = "none";
        }
    }
};

// OPEN SEARCH BAR
defaultButton.addEventListener("click", () => {
	showSearchBar();
	removeClass([searchDropdownContent], "hidden");
	addClass(searchBlurElements, "blurred");
});

// CLOSE SEARCH BAR
closeButton.addEventListener("click", () => {
	hideSearchBar();
    addClass([searchDropdownContent], "hidden");
	removeClass(searchBlurElements, "blurred");
});

// COLLAPSE SEARCH DROP CONTENT & UNBLUR PAGE WHEN PAGE IS CLICKED

const wrapper = document.querySelector(".wrapper");
const mainContent = document.querySelector(".main-content");

wrapper.addEventListener("click", () => {
    if(!searchDropdownContent.classList.contains("hidden")) {
        mainContent.addEventListener("click", () => {
            console.log("main content clicked");
            hideSearchBar();
            addClass([searchDropdownContent], "hidden");
	        removeClass(searchBlurElements, "blurred");
        })
    }
})

// wrapper.addEventListener('click', function(e) {
//     if (!e.target.classList.contains('header')) {
//         // console.log("search-blur clicked");
//         console.log(e.target.classList);
//     }
// });


searchInput.addEventListener("keyup", filterFunction);

// ========== ACTIVE NAVLINKS HIGHLIGHT/BORDER BOTTOM ==========

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
console.log(currentUrl);
// GRAB NAVBAR LINKS
const homeLink = document.getElementById("navbar__home");
const aboutLink = document.getElementById("navbar__about");
const portLink = document.getElementById("navbar__portfolio");
const prodLink = document.getElementById("navbar__products");
const contactLink = document.getElementById("navbar__contact");

// ADD active-link CLASS TO CURRENT PAGE'S LINK
const addActiveClassToCurrrent = () => {
    if (currentUrl.includes("index")) {
        addClass([homeLink], "active-link")
    } else if (currentUrl.includes("about")) {
        addClass([aboutLink], "active-link")
    } else if (
        currentUrl.includes("model") ||
        currentUrl.includes("portrait") ||
        currentUrl.includes("nature") 
    ) {
        addClass([portLink], "active-link")
    } else if (
		currentUrl.includes("products") ||
		currentUrl.includes("before-after") 
	) {
        addClass([prodLink], "active-link")
    } else if (currentUrl.includes("contact")) {
        addClass([contactLink], "active-link")
    } else {
        console.log("page not found");
    }
};

addActiveClassToCurrrent();

// =============================== SMALL SCREEN ===============================

// https://stackoverflow.com/questions/41868060/how-to-run-some-javascript-code-only-on-small-screen-mobile-devices
// WORKS WITH CHROME DEVICE TOOLBAR
// function detectmob() {
//   if (
//     navigator.userAgent.match(/Android/i) ||
//     navigator.userAgent.match(/webOS/i) ||
//     navigator.userAgent.match(/iPhone/i) ||
//     navigator.userAgent.match(/iPad/i) ||
//     navigator.userAgent.match(/iPod/i) ||
//     navigator.userAgent.match(/BlackBerry/i) ||
//     navigator.userAgent.match(/Windows Phone/i)
//   ) {
//     console.log("mobile or tablet size");
//     // return true;
//   } else {
//     console.log("laptop or larger size");
//     // return false;
//   }
// }

// detectmob();


const backdrop = document.querySelector(".backdrop");
// ========== HEADER AND CONTENT ==========
const header = document.querySelector("#header");
const nav = document.querySelector(".nav");
const logoContainer = document.querySelector(".logo-container");
const headerContent = document.querySelector(".header-content");
const searchContainer = document.querySelector(".search-container");
const hamburger = document.querySelector(".hamburger-button");

// ========== DROPDOWN AND CONTENT ==========

// !!! CLASS NAME IS NOT WORKING !!! USE ID INSTEAD !!!
const portButton = document.querySelector("#navbar__portfolio");
const prodButton = document.querySelector("#navbar__products");
const dropdownPort = document.querySelector(".dropdown-content--portfolio");
const dropdownProd = document.querySelector(".dropdown-content--products");
// ARROW ICONS
const upArrowPort = document.querySelector(".up-arrow--portfolio");
const downArrowPort = document.querySelector(".down-arrow--portfolio");
const upArrowProd = document.querySelector(".up-arrow--products");
const downArrowProd = document.querySelector(".down-arrow--products");


const toggleClass = (elementsArr, classname) => {
    for (el of elementsArr) {
        el.classList.toggle(classname);
    }
}

const showElements = (...elements) => {
    for (el of elements) {
        el.classList.remove("hidden");
    }
}

const hideElements = (...elements) => {
    for (el of elements) {
        el.classList.add("hidden");
    }
}


// DYNAMIC UP/DOWN ARROW ICONS 
const setProdArrows = () => {
    if (downArrowProd.classList.contains("hidden")) {
        showElements(downArrowProd);
        hideElements(upArrowProd);
    } 
}

const setPortArrows = () => {
    if (downArrowPort.classList.contains("hidden")) {
        showElements(downArrowPort);
        hideElements(upArrowPort)
    }
}

if (window.innerWidth < 768) {
  	console.log("small screen");

	portButton.addEventListener("click", () => {
        hideElements(dropdownProd);
        toggleClass([dropdownPort, downArrowPort, upArrowPort], "hidden");
        setProdArrows();
	})

	prodButton.addEventListener("click", () => {
        hideElements(dropdownPort);		
        toggleClass([dropdownProd, downArrowProd, upArrowProd], "hidden");
        setPortArrows();
	})

    // 1. EXPAND NAVBAR CONTENT / BACKDROP
    // 2. RESET DROPDOWN CONTENT: COLLAPSE AND HIDE UP ARROW 
    // 3. RESET ARROWS: SHOW DOWN ARROW
    hamburger.addEventListener("click", () => {
        console.log("hamburger clicked");
        toggleClass([nav, headerContent, logoContainer, backdrop], "expand");
	    hideElements(dropdownPort, dropdownProd, upArrowProd, upArrowPort);
        showElements(downArrowProd, downArrowPort);


        backdrop.classList.remove("hidden");

        // toggleClass([backdrop], "expand");
    });

    // !!! PREVENT CSS ANIMATION IN .header FROM RUNNING WHEN PAGE LOADS !!!
    setTimeout(function () {
        // document.body.className = "";
		// header.className = "";
		header.classList.remove("preload");
		// backdrop.className = "";
		backdrop.classList.remove("preload");
		// removeClass([header, backdrop], "preload");
    }, 500);

    // ADD LISTENER TO ALL PAGE-LINKS AND COLLAPSE NAVBAR WHEN CLICKED
    const pageLinks = document.querySelectorAll(".page-link");
    // !!! forEach WILL TRIGGER LISTENER ON PARENT ELEMENT, USE for/for of LOOP !!!
    for (link of pageLinks) {
        link.addEventListener("click", () => {
            console.log("page-link clicked");
            // !!! THIS CAUSES CONTENT TO DISAPPEAR BEFORE NAV BACKGROUND !!! 
            // (IT IS WORKING IN SCRIPT.JS)
            // toggleClass([nav, headerContent], "expand");
            removeClass([logoContainer], "expand");
        });
    }

} else {
  	console.log("large screen");
}
